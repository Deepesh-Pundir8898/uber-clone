import "dotenv/config"
import express from "express"
import cors from "cors"
import { connectToDb } from "./db/db.js";
import userRouter from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import captainRouter from "./routes/captain.routes.js";
import mapsRouter from "./routes/maps.routes.js";
import rideRouter from "./routes/ride.routes.js";
import { initializeSocket } from "./socket.js";
import http from "http";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(cookieParser());

const server = http.createServer(app);

initializeSocket(server)

app.use('/users',userRouter)
app.use('/captains',captainRouter)
app.use('/maps', mapsRouter)
app.use('/ride',rideRouter)


const PORT =process.env.PORT || 8080;
connectToDb();
server.listen(PORT,()=>{ console.log("Server is starting at port:",PORT) })