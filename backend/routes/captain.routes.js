import express from 'express';
import { authCaptain, authUser } from '../middlewares/auth.middleware.js';
import { body } from 'express-validator';
import { registerCaptain ,loginCaptain ,getCaptainProfile ,logoutCaptain} from '../controllers/captain.controller.js';

const captainRouter = express.Router();

captainRouter.post('/register',[
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
    body('fullname.firstname').isLength({min:3}).withMessage('Firstname must be at least 3 characters long'),
    body('vechile.color').isLength({min:3}).withMessage('Color must be at least 3 characters long'),
    body('vechile.plate').isLength({min:3}).withMessage('Plate must be at least 3 characters long'),
    body('vechile.capacity').isLength({min:1}).withMessage('Capacity must be at least 1'),
    body('vechile.vechileType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vechile type'),    
    
], registerCaptain);

captainRouter.post('/login',[
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
], loginCaptain);

captainRouter.get('/profile', authCaptain,getCaptainProfile);

captainRouter.get("/logout",authCaptain,logoutCaptain);

// Documentation for captain routes
/**
 * @swagger
 * /captains/register:
 *   post:
 *     summary: Register a new captain
 *     tags: [Captains]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullname:
 *                 type: object
 *                 properties:
 *                   firstname:
 *                     type: string
 *                   lastname:
 *                     type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               vechile:
 *                 type: object
 *                 properties:
 *                   color:
 *                     type: string
 *                   plate:
 *                     type: string
 *                   capacity:
 *                     type: number
 *                   vechileType:
 *                     type: string
 *                     enum: [car, motorcycle, auto]
 *     responses:
 *       201:
 *         description: Captain successfully registered
 *       400:
 *         description: Validation errors occurred
 * /captains/login:
 *   post:
 *     summary: Login a captain
 *     tags: [Captains]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Captain successfully logged in
 *       400:
 *         description: Validation errors occurred
 *       401:
 *         description: Invalid email or password
 * /captains/profile:
 *   get:
 *     summary: Get captain profile
 *     tags: [Captains]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Captain profile retrieved successfully
 *       401:
 *         description: Unauthorized
 * /captains/logout:
 *   get:
 *     summary: Logout a captain
 *     tags: [Captains]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Captain successfully logged out
 *       401:
 *         description: Unauthorized
 */

export default captainRouter;