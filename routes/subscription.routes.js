import {Router} from 'express';
import authorize from '../middlewares/auth.middleware.js';
import { createSubscription, getUserSubscriptions } from '../controllers/subscription.controller.js';

const subscriptionRouter = Router();


subscriptionRouter.get('/',(req,res)=>{
    res.send({title:'GET all subscription'})
});


subscriptionRouter.get('/:id',(req,res)=>{
    res.send({title:'GET subscription details'})
});


// subscriptionRouter.post('/',authorize,(req,res)=>{
//     res.send({title:'Create subscription'})
// });

subscriptionRouter.post('/',authorize,createSubscription);

subscriptionRouter.put('/:id',(req,res)=>{
    res.send({title:'update a subscription'})
});


subscriptionRouter.delete('/:id',(req,res)=>{
    res.send({title:'Delete a subscription'})
});


subscriptionRouter.get('/user/:id',authorize,getUserSubscriptions);


subscriptionRouter.put('/:id/cancel',(req,res)=>{
    res.send({title:'Cancel subscription'})
});


subscriptionRouter.get('/upcoming-renewals',(req,res)=>{
    res.send({title:'GET upcoming revewals'})
});


export default subscriptionRouter;