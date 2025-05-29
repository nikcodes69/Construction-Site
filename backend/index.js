import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import {connectDB} from './lib/db.js';

import authRoutes from './routes/auth.route.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));  
app.use(cookieParser());

app.use('/api/auth',authRoutes);

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    connectDB();
})
