import express, { Express, Request, Response } from 'express';
import { v4 as uuid } from 'uuid';
import dotenv from 'dotenv';
import authController from './src/contrellers/authController.js';
import postController from './src/contrellers/postController.js';
import userController from './src/contrellers/userController.js';

dotenv.config();

const app: Express = express();
const port: number = parseInt(process.env.PORT || '3001');

app.use(express.json());
app.use('/auth', authController);
app.use('/post', postController);
app.use('/user', userController);

app.listen(port, (): void => console.log(`Server running on port ${port}`));
