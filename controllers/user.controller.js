import User from '../models/user.model.js'


// All users
export const getUsers = async (req,res,next)=>{
    try {
        const users = await User.find(); // Finds all the users
        res.status(200).json({success:true,data:users}); 
    } catch (error) {
        next(error);
    }
}

// Single User
export const getUser = async (req,res,next)=>{
    try {
       const user = await User.findById(req.params.id).select('-password'); //get all the fied except password while logging in
       
       if(!user){
        const error = new Error('User not found');
        error.statusCode = 404;
        throw error;
       }
       
       res.status(200).json({success: true,data: user}); 
    } catch (error) {
        next(error);
    }
}