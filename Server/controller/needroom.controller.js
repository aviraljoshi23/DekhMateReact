import { NeedRoomModel } from '../model/needroom.model.js';
export const add = async (req, res, next) => {
      console.log(req.body);
     try{
    console.log("data");

    let data = await NeedRoomModel.create({
        userId:req.body.userId,
        roommateLocation:req.body.roommateLocation,
        roommatePersonalDetails:req.body.roommatePersonalDetails,
        roommatelookingFor:req.body.roommatelookingFor,
        requiredRent:req.body.requiredRent,
        Date:req.body.Date,
        roommateDescription:req.body.roommateDescription
    });
     res.json({status:true,result:data});}
     catch(err){
        console.log(err);
        res.json({status:false,result:""});
     }
}
export const list  = async(req,res,next)=>{
    NeedRoomModel.find({}).populate({path:'userId'}).then(result=>{
        res.json({status:true,data:result})
    })
    .catch(err=>{
        console.log(err);
    })
}

export const edit = async (req,res,next) =>{
    try{
      let data=  await NeedRoomModel.updateOne({_id:req.body._id},{$set:req.body});
       return res.status(200).json({result:data,status:true})
       } catch (error) {
      console.log(error);
      return res.status(500).json({message:"Internal server error...",status:false})
  }
}