import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://chtejamr:Ganesh_2003@cluster0.uanpiad.mongodb.net')
  console.log("DB connected")
}