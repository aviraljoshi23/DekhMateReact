import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    userEmail:{
         type:String,
         required: true,
         trim: true
    },
    userName:{
        type:String,
        required:true,
        trim:true
    },
    userContact:{
        type:String,
        trim:true,
        required:true
    },
    userPassword:{
        type:String,
        trim:true,
        required:true
    },
    userGender:{
        type:String,
        trim:true,
        required:true,
    }, 
    userProfileImage:{
        type:String,
        required:true,
    }
})

export const  userModel =  mongoose.model('user',userSchema);