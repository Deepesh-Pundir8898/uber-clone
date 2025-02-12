import captainModel  from "../models/captain.model.js";

export const createCaptain = async({firstname,lastname,email,password,color,plate,capacity,vechileType})=>{
    try {
        if(!firstname || !lastname || !email || !password || !color || !plate || !capacity || !vechileType){
            throw new Error('All fields are required');
        }
        const existingCaptain = await captainModel.findOne({email});
        if(existingCaptain){
            throw new Error('Email already in use');
        }

        const captain = captainModel.create({
            fullname:{
                firstname,
                lastname
            },
            email,
            password,
            vechile:{
                color,
                plate,
                capacity,
                vechileType
            }
        })
        return captain;
        
    } catch (error) {
        throw new Error(error.message);
    }
    
}