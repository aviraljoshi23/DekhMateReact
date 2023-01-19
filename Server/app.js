
import express from 'express';
import mongoose from "mongoose"
import path from 'path';
import { fileURLToPath } from "url";
import bodyParser from "body-parser"; 
import cors from "cors";
import userRoute from './routes/user.route.js';

const app =  express();

app.set("view engine","ejs");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicPath = path.join(__dirname,'public');
app.use(express.static(publicPath));
app.use(cors());

mongoose.set("strictQuery",true);
mongoose.connect('mongodb://dekhmate23:codebeans23@ac-o6dy0vx-shard-00-00.nl2vb4b.mongodb.net:27017,ac-o6dy0vx-shard-00-01.nl2vb4b.mongodb.net:27017,ac-o6dy0vx-shard-00-02.nl2vb4b.mongodb.net:27017/?ssl=true&replicaSet=atlas-8pv5hl-shard-0&authSource=admin&retryWrites=true&w=majority',err=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Aviral is connected to Atlas");
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended:true}));


        
        app.use("/user",userRoute);
        app.listen(3000,(req,res)=>{
            console.log(`listening on http://localhost:${3000}`);
        })
    }
})