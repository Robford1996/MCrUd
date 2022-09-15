const mongoose = require("mongoose")

const villainsSchema = new mongoose.Schema({
    name: String,
    alias: String,
    location: String,
    death: Boolean,
    img: String
})

const Villain = mongoose.model("Villains", villainsSchema);
module.exports =  Villain