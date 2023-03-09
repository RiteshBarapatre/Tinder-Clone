import mongoose from "mongoose";
import * as dotenv from 'dotenv'
dotenv.config({path : 'C:/Web Development/MERN Clones/Tinder_Clone/Backend/.env'})
mongoose.set('strictQuery',false)

const db = async ()=>{
    const uri = process.env.DATABASE
    await mongoose.connect(uri)
    console.log('Connection Successful...')
}

export default db