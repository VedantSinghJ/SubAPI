import express from 'express';

import {PORT} from './config/env.js';

import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';

const app = express();

//Routes to use

// api/v1/auth/sign-up
app.use('/api/v1/auth',authRouter)

app.use('/api/v1/users',userRouter)
app.use('/api/v1/subscriptions',subscriptionRouter)

app.get('/',(req,res)=>{
    res.send( "Welcome to Subscription Tracker API! ");
} )


app.listen(PORT,()=>{
    console.log(`API running on http://localhost:${PORT}`);
})


export default app;