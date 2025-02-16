import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,'User name is required'],
        trim:true,
        minLength: 2,   
        maxLength: 50,
    },
    email:{
        type: String,

        unique: true,
        trim: true,
        lowercase:true,
        match: [/\S+@\S+\.\S+/,'Please fill a valid email address'],// contact@gmail.com
    },
    password:{
        type: String,
        required:[true,'User Password is required'],
        minLength: 6,
    }
}, {
    timestamps: true
});

const User = mongoose.model('User',userSchema);

export default User;