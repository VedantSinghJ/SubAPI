import mongoose from 'mongoose';

import {DB_URL,NODE_ENV} from '../config/env.js';


if(!DB_URL){
    throw new Error('Please defien the mongodb URL environment variable inside .env.<development/production>.local');
}

const connectToDatabase =  async ()=>{
    try{
       await mongoose.connect(DB_URL);
       console.log(`connected to Database ${NODE_ENV} mode`);
    }
    catch(error){
        console.error('Error connecting to database: ',error);
        process.exit(1);
    }
}

export default connectToDatabase;