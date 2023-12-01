import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const  connectDB = async()=>{
  try {
    const connectionInstance=mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`Database connect sucessfully... on host : ${(await connectionInstance).connection.host}`)
    
  } catch (error) {
    console.log("Error Data base connection failed due to  :" ,error);
    process.exit(1);
  }
}


export default connectDB;