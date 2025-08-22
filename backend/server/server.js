import 'dotenv/config'
import { createServer } from 'http'
import app from './app.js' 
import mongoose from 'mongoose'

const PORT = process.env.PORT

async function boot(){
  await mongoose.connect(process.env.MONGO_URI);
  createServer(app).listen(PORT, () => console.log(`API on : ${PORT}`))
}

boot();