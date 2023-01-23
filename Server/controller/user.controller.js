import { userModel } from "../model/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res, next) => {
  let saltKey = await bcrypt.genSalt(10);
  let encryptedPassword = await bcrypt.hash(req.body.userPassword, saltKey);
  let gender = req.body.userGender;
  if (gender == "Male") {
    req.body.userProfileImage = "/defaultMale.jpg"
  }
  else {
    req.body.userProfileImage = "/defaultFemale.jpg"
  }
  await userModel.create({
    userEmail: req.body.userEmail,
    userName: req.body.userName,
    userContact: req.body.userContact,
    userPassword: encryptedPassword,
    userGender: req.body.userGender,
    userProfileImage: req.body.userProfileImage
  }).then(result => {
    return res.status(200).json({ status: true, message: "Account Created" })
  }).catch(err => {
    res.status(500).json({ message: "Error Occured", status: false })
  })
}

export const signin = async (req, res, next) => {
  console.log(req.body);
  let user = await userModel.findOne({ userEmail: req.body.userEmail });
  if (user) {
    let validPassword = await bcrypt.compare(req.body.userPassword, user.userPassword);
    if (validPassword) {
      return res.status(200).json({ status: true, message: "Sign In", result: user })
    }
    else
      return res.status(500).json({ status: false, message: "Invalid Credentials" });
  }
  else
    return res.status(500).json({ status: false, message: "Invalid Credentials" });
}

export const update = async (req,res,next)=>{
  try {
    if(req.file){
      req.body.userProfileImage = req.file.filename;
    }
    else{
      let user =  userModel.findOne({_id:req._id})
      req.body.userProfileImage = user.userProfileImage;
    }
    await userModel.updateOne({_id:req.body._id},{$set:req.body});
       return res.status(200).json({message:"User Updated successfully...",status:true})
  } catch (error) {
      console.log(error);
      return res.status(500).json({message:"Internal server error...",status:false})
  }
}