import { NeedRoomModel } from '../model/needroom.model.js';
export const add = async (req, res, next) => {
      console.log(req.body);
     try{
    console.log("data");

    let data = await NeedRoomModel.create({
        user_id:req.body.user_id,
        userAddress:req.body.userAddress,
        userPgender:req.body.userPgender,
        userHdetail:req.body.userHdetail,
        userSdetail:req.body.userSdetail,
        userDate:req.body.userDate,
        userdescription:req.body.userdescription
    });
    console.log(data);
     res.json({status:true,result:data});}
     catch(err){
        console.log(err);
        res.json({status:false,result:""});
     }
}
export const list = async (req, res, next) => {
    try{
        let data=await NeedRoomModel.find();
        console.log("list")
         res.json({status:true,result:data});}
         catch(err){
            res.json({status:false,result:""});
         }
    
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