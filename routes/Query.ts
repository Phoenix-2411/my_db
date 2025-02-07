import { Request, Response } from 'express';
import { User, Profile, Client, Role, TeamUser, Team, Attachment } from '../models';

export async function getUsersWithDetails(req: Request, res: Response) {
    try {
        const users = await User.findAll({
            attributes: [
                'id', 'clientId', 'isActive', 'isFirstLogin', 'isSSOEnabled', 'type',
                'description', 'clientSpecific', 'createdAt', 'updatedAt', 'roleId'
            ],
            include: [
                {
                    model: Profile,
                    as: 'profile',
                    attributes: ['id', 'externalId', 'name', 'firstName', 'lastName', 'middleName']
                },
                {
                    model: Client,
                    as: 'client',
                    attributes: ['id', 'configs']
                },
                {
                    model: Role,
                    as: 'groupRole', // Correct alias used here
                    where: { isActive: true },
                    required: false
                },
                {
                    model: TeamUser,
                    as: 'teamUsers',
                    include: [
                        {
                            model: Team,
                            as: 'team',
                            attributes: [
                                'id', 'name', 'description', 'createdAt', 'updatedAt', 'inspectionTypeId',
                                'inspectionTypeName', 'schedulable', 'claimType'
                            ],
                            include: [
                                {
                                    model: TeamUser,
                                    as: 'teamUsers',
                                    include: [
                                        {
                                            model: Role,
                                            as: 'role',
                                            attributes: ['id', 'policies'],
                                            where: { isActive: true },
                                            required: false
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    model: Attachment,
                    as: 'attachments',
                    where: { deleted: false },
                    required: false
                }
            ],
            order: [['profile', 'firstName', 'DESC']],
            limit: 500,
            offset: 0
        });

        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching users' });
    }
}
