import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import db from './db'
import { initModels } from './models'

import userRoutes from './routes/userRoutes';

dotenv.config();
const app = express();
app.use(express.json()); // Middleware to parse JSON
initModels(db)

app.use('/api', userRoutes);

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
