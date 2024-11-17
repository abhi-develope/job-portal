import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './db/connectDB.js';
import userRoute from './routes/user.route.js'
import companyRoutes from './routes/company.routes.js'
import jobRoutes from './routes/job.routes.js'
import applicationRoutes from './routes/application.route.js'

dotenv.config();
const app = express();

// middleware---
app.use(express.json());
app.use(cookieParser());
const corsOption = {
    origin: 'http//localhost:5173',
    Credentials: true
}
app.use(cors(corsOption));

const port = process.env.PORT || 3000;

app.use('/api/auth', userRoute)
app.use('/api/company', companyRoutes)
app.use('/api/job', jobRoutes)
app.use('/api/application', applicationRoutes)


app.listen(port, ()=>{
    connectDB();
    console.log(`listing on port ${port}`);
    
})


