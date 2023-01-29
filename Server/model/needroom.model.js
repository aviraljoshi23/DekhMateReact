import mongoose from "mongoose";

const needroomSchema = mongoose.Schema({
    
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:"user"
    },
    roommateLocation:{
        type:String,
        required:true
     },
     roommatePersonalDetails:{
      type:[],
      required:true
     },
     roommatelookingFor:{
        type:String,
        required:true
     },
     requiredRent:{
        type:Number,
        required:true
     },
     Date:{
        type:String,
        required:true
     },
     roommateDescription:{
        type:String,
        required:true
     }
})


export const  NeedRoomModel =  mongoose.model('NeedRoom',needroomSchema);
