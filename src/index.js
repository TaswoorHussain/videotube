import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import express from "express";
dotenv.config({
    path:'./.env',
})

const app=express();


connectDB()
.then(()=>{

  // app.get('/' ,(req,res)=>{
  //     res.send("<h1>This is videotube express app... </h1>")
  // })
   app.listen(process.env.PORT || 8000 , ()=>{
     console.log("Server is running on port " , process.env.PORT)
   })
})
.catch((error)=>{
    console.log("err") //this is also database error ;
})






















































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