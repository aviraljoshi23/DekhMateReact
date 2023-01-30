import { userModel } from "../model/user.model.js";
export const sendFlatRequest = async(req,res,next)=>{
    console.log(req.body);
    let reciver =  await userModel.findOne({_id:req.body.reciverId});
    let senderProfile = await userModel.findOne({_id:req.body.senderId});
    reciver.messageBox.push(senderProfile);
    await userModel.updateOne({_id:req.body.reciverId},{$set:reciver});
    console.log(reciver);
}