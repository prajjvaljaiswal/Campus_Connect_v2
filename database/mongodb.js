const dotenv = require("dotenv")
// const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require("mongoose")

dotenv.config()
const uri = process.env.MONGODB_SERVER

const dbconnect= async()=>{
  try {
    await mongoose.connect("mongodb+srv://prajjaiswal158:9967138778@compusconnect.xo5zf.mongodb.net")
    console.log("cn")
  } catch (error) {
    console.log(error)
  }
}

module.exports = dbconnect