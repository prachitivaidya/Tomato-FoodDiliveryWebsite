import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://tomato:tomato@cluster0.fuksv0e.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}