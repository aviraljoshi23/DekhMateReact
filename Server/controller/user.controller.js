import { userModel } from "../model/user.model.js";


export const newAccount  =  async(req,res,next)=>{
  console.log(req.body);
  let saltKey =  await bcrypt.genSalt(10);
  let encryptedPassword = await bcrypt.hash(req.body.userPassword,saltKey);
  if(req.file.filename){
    req.body.userProfileImage =  req.file.filename
  }
  else{
    if(req.body.userGender=="Male"){
        req.body.userProfileImage =  "./public/UserProfiles/defaultMale.jpg"
    }
    else{
        req.body.userProfileImage =  "./public/UserProfiles/defaultFemale.jpg"
    }
  }
    await userModel.create( {
      userEmail:req.body.userEmail,
      userContact:req.body.userContact,
      userName:req.body.userName,
      userGender:req.body.userGender,
      userPassword:encryptedPassword,
      userProfileImage :req.body.userProfileImage
    }).then(result=>{
       return  res.status(200).json({status:true,message:"Account Created"})
    }).catch(err=>{
        res.status(500).json({message:"Error Occured",status:false})
    })
}



export const signin = async (req,res,next)=>{
  console.log(req.body);
  let user = await userModel.findOne({userEmail: req.body.userEmail});        
  if(user){
    let validPassword = await bcrypt.compare(req.body.userPassword,user.userPassword);
    if(validPassword){
      return res.status(200).json({status:true,message:"Sign In",result:user})
    }
    else
     return  res.status(500).json({status:false,message:"Invalid Credentials"});
  } 
  else
    return  res.status(500).json({status:false,message:"Invalid Credentials"});
}