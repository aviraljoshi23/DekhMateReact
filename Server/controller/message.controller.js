import nodemailer from 'nodemailer';
export const sendRequestMail = async(req,res,next)=>{
    console.log(req.body);
      try{
          var transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: 'dekhmate@gmail.com',
                pass: 'ttdaoildtavgjooc',
              }
            });
          const mailOption = {
              from:'dekhmate@gmail.com',
              to:req.body.reciverEmail,
              subject:"Looking for Roommate At DekhMate",
              html:'<h2> Hey Are you looking for the partner </h2> <h3>'+req.body.senderRequirement+'</h3><p> Hi '+req.body.senderName+' <br> '+req.body.senderName+' made a request to contact with you. '
          }
          transporter.sendMail(mailOption,function(err,data){
              if(err){
                  console.log(err);
              }
              else{
                  return res.status(200).json({status:true,message:"Message Send"+req.body.reciverName});
              }
          })
      }
      catch(err){
      }
  }