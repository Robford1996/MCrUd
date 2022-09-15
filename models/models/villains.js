const mongoose = require("mongoose")

const villainsSchema = new mongoose.Schema({
    name: String,
    alias: String,
    location: String,
    death: Boolean,
    img: String
})

const Villains = mongoose.model("Villains", villainsSchema);
module.exports =  Villains