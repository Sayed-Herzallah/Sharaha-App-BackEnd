// ================= import modules =================
import mongoose from 'mongoose'


//  =============== connect to database ================
export const connectDB= async ()=> {
    try {
        await mongoose.connect(process.env.connect);
        console.log("success to database");
        
    } catch (error) {
        console.log("failed to database");   
    }
}