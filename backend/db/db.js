import "dotenv/config"
import mongoose from "mongoose";

export const connectToDb =async() => {
    try {
       await mongoose.connect(process.env.MONOGODBURL)
       console.log("Db connected Successfully")
        
    } catch (error) {
        console.log("Error connecting to DB",error);
    }
}
