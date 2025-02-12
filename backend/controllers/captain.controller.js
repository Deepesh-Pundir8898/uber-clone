import captainModel from '../models/captain.model.js';  
import { createCaptain } from '../services/captain.service.js';
import { validationResult } from 'express-validator';
import BlacklistToken from '../models/blacklistToken.model.js';

export const registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { fullname, email, password, vechile } = req.body;

    const hashedPassword = await captainModel.hashPassword(password);
    const captain = await createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vechile.color,
        plate: vechile.plate,
        capacity: vechile.capacity,
        vechileType: vechile.vechileType
    });
    const token = captain.genrateAuthToken();
    res.status(201).json({ token, captain });
}

export const loginCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    const captain = await captainModel.findOne({ email }).select('+password');

    if (!captain) {
        return res.status(404).json({ message: 'Captain not found' });
    }
    const isMatch = await captain.comparePassword(password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid password' });
    }
    const token = captain.genrateAuthToken();
    res.cookie('token', token, { httpOnly: true });
    res.status(200).json({ token, captain });
}

export const getCaptainProfile = async (req, res, next) => {
    res.status(200).json(req.captain);
}

export const logoutCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    await BlacklistToken.create({ token });

    res.clearCookie('token');


    res.status(200).json({ message: 'Logged out' });
}