import express from 'express';
import cookieParser from 'cookie-parser';
import cors from "cors";
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import userRoute from "./routes/user.routes.js"
import companyRoute from './routes/company.routes.js'
import jobRoute from './routes/job.routes.js'
import applicatonRoute from './routes/application.routes.js'


dotenv.config({});


const app = express();

// middileware

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const coreOption = {
    origin: 'http//localhost:5173',
    Credentials:true
}

app.use(cors(coreOption));

const Port = process.env.PORT || 3000;

// apis
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicatonRoute);




app.listen(Port, ()=>{
    connectDB()
    console.log(`server is running at port: ${Port}`)
})




