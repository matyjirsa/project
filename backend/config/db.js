import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://matyjirsa:3488132746@cluster0.3lzk6wz.mongodb.net/PROJEKT2').then(()=>console.log("DB Connected"));
}