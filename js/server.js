import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = parseInt(process.env.PORT || '3001');
app.listen(port, () => console.log(`Server running on port ${port}`));
