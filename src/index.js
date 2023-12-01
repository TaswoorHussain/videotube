import dotenv from 'dotenv';
import connectDB from "./db/index.js";

dotenv.config({
    path:'./.env',
})


connectDB();






















































// __________________________________________________________Approch one______________
// import mongoose from 'mongoose';
// import { DB_NAME } from './constants.js'; //write extension should be must
// import express  from 'express';
 
// const app=express();



// ________________________________________________________________________________
// (()=>{})() effie syntax
// (async ()=>{

//     try {
//          await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("Error :" ,(error)=>{
//            console.log("Express app is not correctly working due to " ,error);
//            throw error
//         })

//         app.listen(process.env.PORT , ()=>{
//             console.log("App is listening on port" , process.env.PORT);
//         })

//     } catch (error) {
//         console.log("ERROR : " , error);
//         throw error
//     }



// })()