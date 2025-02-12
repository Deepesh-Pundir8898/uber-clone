import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minLength:[3, "Firstname must be at least 3 characters long"],
        },
        lastname: {
            type: String,
            minLength:[3, "Lastname must be at least 3 characters long"],
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, "Please fill a valid email address"]
    },
    password:{
        type: String,
        required: true, 
        minLength:[6, "Password must be at least 6 characters long"],
        select: false
    },
    soketid:{
        type: String,
    },
    status:{
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vechile:{
        color:{
            type:String,
            required: true,
            minLength:[3, "Color must be at least 3 characters long"],
        },
        plate:{
            type:String,
            required: true,
            minLength:[3, "Plate must be at least 3 characters long"],
        },
        capacity:{
            type:Number,
            required: true,
            min:[1, "Capacity must be at least 1"],
        },
        vechileType:{
            type:String,
            required: true,
            enum: ['car', 'motorcycle', 'auto'],
        }

    },
    location:{
        lng:{
            type: Number,
        },
        ltd:{
            type: Number,
        }
    },
  
});

captainSchema.methods.genrateAuthToken = function(){
    const token = jwt.sign({ _id: this._id.toString() }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

captainSchema.methods.comparePassword = async function (password){
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        throw new Error('Error comparing passwords');
    }
}

captainSchema.statics.hashPassword= async function(password){
    return bcrypt.hash(password,10)
} 
 
const captainModel = mongoose.model('captain', captainSchema); 

export default captainModel;