import "dotenv/config"
import express from "express"
import cors from "cors"
import { connectToDb } from "./db/db.js";
import userrRouter from "./routes/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }))

app.use('/users',userrRouter)


const PORT =process.env.PORT;
connectToDb();
app.listen("8080",()=>{ console.log("Server is starting at port:",PORT) })