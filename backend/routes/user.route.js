import express from 'express';
import { userLogin, userLogout, userProfile, userRegister } from '../controllers/user.controller.js';
import {body} from "express-validator";
import { authUser } from '../middlewares/auth.middleware.js';

const userRouter = express.Router();

userRouter.post('/register',[
        body('email').isEmail().withMessage("Invalid Email"),
        body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 characters long'),
        body('password').isLength({min:6}).withMessage("Password must be at least 6 character long")
    ]
,userRegister);

userRouter.post('/login',[
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({min:6}).withMessage("Password must be at least 6 character long")
],userLogin);

userRouter.get('/profile',authUser,userProfile)

userRouter.get('/logout',authUser,userLogout)


export default userRouter





