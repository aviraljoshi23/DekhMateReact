import { flatModel } from "../model/flat.model.js"

export const addFlat =  async(req,res,next)=>{
    console.log(req.body);
    const Amenities  = req.body.flatAmenities.split(',');
    req.body.flatAmenities  =  Amenities;
    try{
        let arr = [];
        for(let i = 0;i<req.files.length;i++){
            arr.push(req.files[i].filename);
        }
        req.body.flatImages = arr;
        console.log(req.body);
        const data = await flatModel.create(req.body);
        return res.json({status:true,message:"New Flat Added Successfully"});
    }
    catch(error){
        console.log(error);
    }
}
export const list  = async(req,res,next)=>{
    flatModel.find({}).populate({path:'userId'}).then(result=>{
        res.json({status:true,data:result})
    })
    .catch(err=>{
        console.log(err);
    })
}