import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from '../config/db.js';

dotenv.config()
const PORT = process.env.PORT

const app = express();

//json parser middleware 
app.use(express());


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
      });
}) 