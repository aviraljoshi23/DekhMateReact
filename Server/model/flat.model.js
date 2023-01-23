import mongoose, { mongo } from "mongoose";

const flatSchema = mongoose.Schema({

    userId:{
        type:mongoose.Schema.ObjectId,
        ref:"user"
    },
    flatLocation:{
        type:String,
        required:true
    },
    lookingFor:{
        type:String,
        required:true
    },
    Rent:{
        type:String,
        required:true
    },
    Occupancy:{
        type:String,
        required:true
    },
    AreaZipCode:{
        type:String,
        required:true
    },
    flatDescription:{
        type:String,
        required:true
    },
    AvailableDate:{
        type:String,
        required:true
    },
    flatImages:{
        type:[]
    }
})

export const flatModel = mongoose.model("UserFlats",flatSchema);