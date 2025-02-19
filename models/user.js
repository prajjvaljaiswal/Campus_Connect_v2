import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        immutable: true
    },
    password:{
        type: String,
        required: true
    },
    collageName: {
        type: Array,
        required: true
    } ,
    department:{
        type: Array,
        ref: 'Collage',
        required: true
    },
    photoUrl:{
        type: String
    },
    role:{
        type: String
    }
},{
    timestamps: true
})


const User = mongoose.model("user",userSchema);
export default User; 