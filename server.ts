import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';

dotenv.config();
const app = express();
app.use(express.json()); // Middleware to parse JSON


app.use('/api', userRoutes);

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
