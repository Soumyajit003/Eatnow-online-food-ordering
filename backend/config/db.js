import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://soumya003:soumya003@cluster0.deiyd.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}