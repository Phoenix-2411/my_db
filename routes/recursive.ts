import { Request, Response } from 'express';
import { User, Profile, Client, Role, TeamUser, Attachment } from '../models';

export async function getUsersWithDetai(req: Request, res: Response) {
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
                    attributes: [
                        'id', 'externalId', 'name', 'firstName', 'lastName', 'middleName',
                        'workEmail', 'workPhone', 'personalPhone', 'personalEmail', 'fax',
                        'gender', 'isPerson', 'workAddress', 'profilePicture'
                    ]
                },
                {
                    model: Client,
                    as: 'client',
                    attributes: [['configs', 'userConfigs']]
                },
                {
                    model: Role,
                    as: 'groupRole',
                    attributes: [
                        'id', 'name', 'description', 'group', 'isActive',
                        'createdAt', 'updatedAt', 'policies'
                    ],
                    where: { isActive: true },
                    required: false
                },
                {
                    association: 'team',
                    attributes: [
                        'id', 'name', 'inspectionTypeId', 'description', 'createdAt',
                        'updatedAt', 'inspectionTypeCode', 'claimType', 'schedulable', 'inspectionTypeName'
                    ],
                    required: false,
                    include: [
                        {
                            model: TeamUser,
                            as: 'teamUsers',
                            attributes: ['id', 'isActive', 'createdAt', 'updatedAt'],
                            include: [
                                {
                                    model: Role,
                                    as: 'role',
                                    attributes: ['id', 'policies'],
                                    where: { isActive: true },
                                    required: false
                                }
                            ],
                            required: false
                        }
                    ]
                },
                {
                    model: Attachment,
                    as: 'attachments',
                    attributes: [
                        'id', 'userId', 'type', 'mimeType', 'title', 'description',
                        'active', 'deleted', 'createdBy', 'updatedBy', 'createdAt', 'updatedAt'
                    ],
                    where: { deleted: false },
                    required: false
                }
            ],
            where: { clientCode: 'MPCA', isDeleted: false },
            order: [[{ model: Profile, as: 'profile' }, 'firstName', 'DESC']],
            limit: 500,
            offset: 0,
            raw: true,
            nest: true
        });

        res.status(200).json(users);
    } catch (error: any) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching users', details: error.message });
    }
}
