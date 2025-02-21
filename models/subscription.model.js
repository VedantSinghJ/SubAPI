import mongoose from 'mongoose';

const subscriptionSchema = mongoose.Schema({
    name:{
        type: String,
        required:[true,'Subscription name is required'],
        trim: true,
        minLength: 2,
        maxlength: 100,
    },
    price:{
        type:Number,
        required:[true,'Subscription price is required'],
        min:[0,'Price must be greater than 0']
    },
    currency:{
        type:String,
        enum: ['INR','USD','EUR'],
        default: 'INR'
    },
    frequency:{
        type:String,
        enum : ['daily','weekly','monthly','yearly'],
    },
    category: {
        type:String,
        enum: ['sports','news','entertainment','lifestyle','technology','finance','politics','other'],
        required: true,   
    },
    paymentMethod:{
        type: String,
        required: true,
        trim:true,
    },
    status:{
        type: String,
        enum: ['active','cancelled','expired'],
        default: 'active'
    },
    startDate:{
        type:Date,
        required:true,
        validate:{
            validator: (value)=> value <= new Date(),
            message: 'Start data must be in the past',
        }
    },
    renewalDate:{
        type:Date,
        required:false,
        validate:{
            validator: function(value){
                return value > this.startDate; 
            },
            message: 'Renewal data muset be after the start date',
        }
    },
    // Refrences pointing to other model in database
    user:{
       type:mongoose.Schema.Types.ObjectId,
       ref: 'User',
       required:true,
       index:true,  
    }
    
},{timestamps:true});


//Auto-calculate renewal data if missing.
//pre runs before saving the data in mongodb    
subscriptionSchema.pre('save',function(next){
    if(!this.renewalDate){
        const renewalPeriods = {
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365,
        };

        //example test case
        //jan 1st -start date
        //30 days - freq montly selcted
        //jan 31st - renewal date

        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate()+renewalPeriods[this.frequency]);
    }

    //Auto-update the status if renewal date has passed
    if(this.renewalDate < new Date()){
        this.status = 'expired';
    }

    next();
})


const Subscription = new mongoose.model('Subscription',subscriptionSchema);

export default Subscription;