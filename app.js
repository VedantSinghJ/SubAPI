import express from 'express';
import cookieParser from 'cookie-parser';

import {PORT} from './config/env.js';

import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import connectToDatabase from './Database/mongodb.js';
import errorMiddleware from './middlewares/error.middleware.js';
import arcjetMiddleware from './middlewares/arcjet.middleware.js';



const app = express();

app.use(express.json()); // APIs receiving JSON data in req.body.
app.use(express.urlencoded({extended: false})); //Used for: Handling form submissions (application/x-www-form-urlencoded). ( Parses URL-encoded form data.)
app.use(cookieParser()) //read cookies to store user data

app.use(arcjetMiddleware); 

//Routes to use

// api/v1/auth/sign-up
app.use('/api/v1/auth',authRouter);

app.use('/api/v1/users',userRouter);
app.use('/api/v1/subscriptions',subscriptionRouter);

app.use(errorMiddleware);

app.get('/',(req,res)=>{
    res.send( "Welcome to Subscription Tracker API! ");
} )


app.listen(PORT,async ()=>{
    console.log(`API running on http://localhost:${PORT}`);

    await connectToDatabase()

});


export default app;