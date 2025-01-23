import { userModel } from "../models/user.model.js";

export const createUser = async({firstname,lastname,email,password})=>{
    if(!firstname || !email || !password){
        throw new Error('All fields are required');
    }
    const existingUser = await userModel.findOne({email});
    if(existingUser){
        throw new Error('Email already in use');
    }
    const user = userModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password
    })
    return user;
}