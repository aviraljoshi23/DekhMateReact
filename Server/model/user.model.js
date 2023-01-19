import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    userName:{
        type:String,
        trim:true,
        required:true
    },
    userEmail:{
         type:String,
         required: true,
         trim: true
    },
    userPassword:{
        type:String,
        trim:true,
        required:true
    },
    userContact:{
        type:String,
        trim:true,
        required:true
    },
    userGender:{
        type:String,
        trim:true,
        required:true
    },
    userProfileImage:{
        type:String,
        trim:true,
        required:true
    }
})

export const  userModel =  mongoose.model('user',userSchema);