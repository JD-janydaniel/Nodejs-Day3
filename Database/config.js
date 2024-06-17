import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoDB_URL = process.env.MONGODB_URL;

const connectDB = async (req, res) => {
  //option is used in the previous version just to know what is it dont use it
  // const options={
  //     useNewUrlParser:true,
  //     useUnifiedTopology:true,
  // }
  try {
    //    console.log(mongoDB_URL); //just to know wether the mongoDB is connected
    const connection = await mongoose.connect(mongoDB_URL);
    console.log("MongoDB Connected Successfully");
    //    return connection;
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "MongoDB Connection Error" });
  }
};

export default connectDB;
