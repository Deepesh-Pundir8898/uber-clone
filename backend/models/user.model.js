import mongoose from "mongoose";
import "dotenv/config"
import bcrypt from "bcrypt";
import jwt  from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minLength:[3,'First name must be at least 3 characters long']
        },
        lastname:{
            type:String
            // minLength:[3,'Last name must be at least 3 characters long']
        }
    },
    email:{
        type:String,
        required:true,
        minLength:[5,'Email must be at least 5 characters Long']
    },
    password:{
        type:String,
        required:true,
        select:false   // by default password is not sent
    },
    socketId:{
        type:String
    }
}) 

// Schema :structure of the data to except in incomming request
// Model : the DB collection with which that data will interact

userSchema.methods.genrateAuthToken = function(){
    const token = jwt.sign({ _id: this._id.toString() }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

userSchema.methods.comparePassword = async function (password){
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        throw new Error('Error comparing passwords');
    }
}

userSchema.statics.hashPassword= async function(password){
    return bcrypt.hash(password,10)
} 

export const userModel = mongoose.model('user',userSchema)