import dayjs from 'dayjs'



//when packages are written as MODULE, you can use IMPORT , but upstash workflow was written using common js so , import won't work directly
//but in package.json we mentioned type:module so only Import is allowed 


//Two lines to import upstash module using require
import { createRequire } from 'module';
const require = createRequire(import.meta.url);


const {serve} = require('@upstash/workflow/express');

import Subscription from '../models/subscription.model.js';

//When inside workflow , what workflow will do
//Remainders 
const REMINDERS = [7,5,2,1]

export const sendReminders = serve(async (context)=>{
    const {subscriptionId} = context.requestPayload;
    const subscription = await fetchSubscription(context,subscriptionId);

    if(!subscription || subscription.status != 'active') return;

    const renewalDate = dayjs(subscription.renewalDate);

     //current date and time dayjs()
    if(renewalDate.isBefore(dayjs())){
        console.log(`Renewal date has passed for subscription ${subscriptionId}. Stopping workflow`);
        return;
    }

    for(const daysBefore of REMINDERS){
        const reminderDate= renewalDate.subtract(daysBefore,'day');
        // renewal date = 22 feb , reminder dates= 15,17,20,21 feb
        
        if(reminderDate.isAfter(dayjs())){
            await sleepUntilReminder(context, `Reminder ${daysBefore} days before`, reminderDate);
        }

        await triggerReminder(context, `${daysBefore} days before reminder`, subscription);
    }
});

const fetchSubscription = async (context, subscriptionId)=>{
    return await context.run('get subscription',async ()=>{
        return Subscription.findById(subscriptionId).populate('user','name email');
    })
}

const sleepUntilReminder = async (context,label,date)=>{
    console.log(`Sleeping until ${label} reminder at ${date}`);
    await context.sleepUntil(label,date.toDate());
}

const triggerReminder = async (context,label)=>{
    return await context.run(label,()=>{
        console.log(`Triggering ${label} remainder`);
        // send email,SMS,push notification...
    })
}