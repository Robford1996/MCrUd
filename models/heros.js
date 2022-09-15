const mongoose = require("mongoose")

const herosSchema = new mongoose.Schema({
    name: String,
    alias: String,
    location: String,
    death: Boolean,
    img: String
})

const Heros = mongoose.model("Heros", herosSchema);
module.exports =  Heros