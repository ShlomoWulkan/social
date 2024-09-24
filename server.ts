import express, { Express, Request, Response } from 'express';
import { v4 as uuid } from 'uuid';
import dotenv from 'dotenv';

dotenv.config();
const app: Express = express();

const port: number = parseInt(process.env.PORT || '3001');

app.listen(port, () => {
    try {
        console.log(`Server running on port ${port}`);
    } catch (error) {
        console.log(error);
    }
});
