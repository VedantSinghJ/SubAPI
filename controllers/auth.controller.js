import mongoose from 'mongoose';
import User from '../models/user.model.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { JWT_SECRET,JWT_EXPIRES_IN } from '../config/env.js';

// What is a req body ? ->  req.body is an object containing data from the client (POST request)

export const signUp = async (req,res,next)=>{
    //Implementing Sign up logic here
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        //Sign up logic
        const {name,email,password} = req.body;

        // Check if a user already exits
        const existingUser = await User.findOne({email});

        if(existingUser){
            const error = new Error('User already exists');
            error.statusCode = 400;
            throw error;
        }

        // Hash password

                //salt => complexity we use for hashing password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = await User.create([{name,email,password:hashedPassword}],{session});

        const token = jwt.sign({userId: newUser[0]._id},JWT_SECRET,{expiresIn:JWT_EXPIRES_IN})

        await session.commitTransaction();
        session.endSession();


        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: {
                token,
                user: newUser[0]
            }
        })
        
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        next(error);
    }

}
export const signIn = async (req,res,next)=>{
    //Implement SIgn up logic here
}
export const signOut = async (req,res,next)=>{
    //Implement SIgn up logic here
}


//We are going to merge auth routes and this code together 