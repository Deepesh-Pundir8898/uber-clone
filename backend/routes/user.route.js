import express from 'express';
import { userRegister } from '../controllers/user.controller.js';
import {body} from "express-validator";

const userrRouter = express.Router();

userrRouter.post('/register',[
        body('email').isEmail().withMessage("Invalid Email"),
        body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 characters long'),
        body('password').isLength({min:6}).withMessage("Password must be at least 6 character long")
    ]
,userRegister);


export default userrRouter





