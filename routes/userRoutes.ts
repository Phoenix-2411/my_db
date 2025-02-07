import express, { Request, Response } from 'express';
import { Profile } from '../models/Profile';
import { Role } from '../models/Role';
import { Client } from '../models/Client';
import { User } from '../models/User';
import { getUsersWithDetails } from './Query';

const router = express.Router();
router.get('/fetch-users', getUsersWithDetails);
// Route to fetch active users with their details
router.get('/active-users', async (req: Request, res: Response) => {
    try {
        console.log('Fetching active users');
        const activeUsers = await User.findAll({
            where: { isActive: true },
            include: [
                { model: Profile, as: 'profile' },
                { model: Role, as: 'role' },
                { model: Client, as: 'client' }
            ],
        });

        res.status(200).json(activeUsers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching active users' });
    }
});

export default router;
