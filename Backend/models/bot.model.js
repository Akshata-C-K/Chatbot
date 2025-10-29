import mongoose from "mongoose";

const botSchema = new mongoose.Schema({

    text:{
        type: String,
        required: true
    },
    timestamp:{
        type:Date,
        deafault:Date.now
    }
})

const Bot=mongoose.model("Bot",botSchema)
export default Bot;