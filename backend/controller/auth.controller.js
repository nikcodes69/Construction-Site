import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.util.js';

import bcrypt from 'bcryptjs';  // for password comparison
import jwt from 'jsonwebtoken'; // for creating tokens

import dotenv from 'dotenv';

dotenv.config();

export const signup = async(req,res)=>{

    const {username, email, password} = req.body;
    const newUser = new User({username, email, password});

    try{
    await newUser.save();
    res.status(201).json({message:'User created Successfully!'});
    }
    catch(error){
       next(errorHandler(550,'Error in the function!'));
    }
}

export const login = async(req,res)=>{

    const {email, password} = req.body;
    
    try{
        if(email && password){
       
        const existingUser = await User.findOne({email:User.email});   //1. Check if the user exists
        const isMatch = await bcrypt.compare(password, User.password);   //2. Compare password

        if(!existingUser||!isMatch){
            return res.status(400).json({message:'Invalid credentials'});
        }   

        const token = jwt.sign({ id: User._id }, process.env.JWT_SECRET, { expiresIn: '1h' });  
        //3. Generate JWT TOKEN

        // 4. Send response
        res.json({
            message: 'Login successful',
            token,
            user: { id: User._id, email: User.email },
        });
        }

        else {
            res.status(401).json({ message: 'Please enter both email & password' });
        }
    }
    catch(error){
        next(errorHandler(550,'Error in the function!'));
    }
}