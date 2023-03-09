import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
    name : String,
    imgUrl : String,
    age : String,
})

const model = mongoose.model('tinder_user',cardSchema)

export default model