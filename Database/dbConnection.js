import mongoose from "mongoose";
export const dbConnection=mongoose.connect('mongodb://localhost:27017/Assignment8Route').
then(()=>console.log('db connected')).catch((err)=>{console.log(err)})