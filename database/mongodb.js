const dotenv = require("dotenv")
// const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require("mongoose")

dotenv.config()
const uri = process.env.MONGODB_SERVER
const MONGODB_URI = process.env.MONGODB_URI;

let cached = global.mongoose || { conn: null, promise: null };


// const dbconnect= async()=>{
//   try {
//     await mongoose.connect("mongodb+srv://prajjaiswal158:9967138778@compusconnect.xo5zf.mongodb.net")
//     console.log("cn")
//   } catch (error) {
//     console.log(error)
//   }
// }

async function dbconnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Adjust timeout
      socketTimeoutMS: 45000, // Prevents Vercel 504 errors
    }).then((conn) => {
      console.log("MongoDB connected!");
      return conn;
    }).catch((err) => {
      console.error("MongoDB connection error:", err);
      throw err;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

module.exports = dbconnect