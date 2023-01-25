import mongoose from "mongoose";

const needroomSchema = mongoose.Schema({
    
    user_id:{
        type:mongoose.Schema.ObjectId,
        ref:"user"
    },
     userAddress:{
        type:String,
        required:true
     }, 
     userPgender:{
        type:String,
        required:true
     },
      userHdetail:{
        type:String,
        required:true
     },
     userSdetail:{
        type:[],
        required:true
     },
     userDate:{
        type:String,
        required:true
     },
     userdescription:{
        type:String,
        required:true
     }
})


export const  NeedRoomModel =  mongoose.model('NeedRoom',needroomSchema);
