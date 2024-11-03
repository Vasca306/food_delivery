import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://buitan0164:buitan0164@cluster0.u0tfp.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));

}