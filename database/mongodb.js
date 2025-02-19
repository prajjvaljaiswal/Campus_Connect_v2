import dotenv from "dotenv"
// const { MongoClient, ServerApiVersion } = require('mongodb');
import mongoose from "mongoose"

dotenv.config()
const uri = process.env.MONGODB_SERVER

const dbconnect= async()=>{
  try {
    await mongoose.connect(uri)
    console.log("cn")
  } catch (error) {
    console.log(error)
  }
}

export default dbconnect;