import express from "express"

import { query } from "express-validator";
import { authUser } from "../middlewares/auth.middleware.js";
import { getAutoCompleteSuggestions, getCoordinates, getDistanceTime } from "../controllers/map.controller.js"

const mapsRouter = express.Router();

mapsRouter.get('/get-coordinates',
    query('address').isString().isLength({ min: 3 }),
    authUser,
    getCoordinates
);

mapsRouter.get('/get-distance-time',
    query('origin').isString().isLength({ min: 3 }),
    query('destination').isString().isLength({ min: 3 }),
    authUser,
    getDistanceTime
)

mapsRouter.get('/get-suggestions',
    query('input').isString().isLength({ min: 3 }),
    authUser,
    getAutoCompleteSuggestions
)



export default mapsRouter;