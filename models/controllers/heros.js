const express = require("express");
const router = express.Router()
const Heros = require("../models/heros.js")

//INDEX
router.get("/", (req, res)=>{
    Heros.find({}, (err, foundHeros)=>{
        res.render("heros/index.ejs", {
            heros: foundHeros
        })
    })
})

//NEW
router.get("/new", (req, res)=>{
    res.render("heros/new.ejs")
})

//DELETE
router.delete("/:id", (req, res)=>{
    Heros.findByIdAndDelete(req.params.id, (err, data)=>{
        res.redirect("heros")
    })
})

//UPDATE
router.put("/:id", (req, res)=>{
    if (req.body.death === "on"){
        req.body.death = true
    }else{
        req.body.death = false
    }
})
Heros.findByIdAndUpdate(req.params.id, (err, data)=>{
    res.redirect("heros")
})

//CREATE
router.post("/", (req, res)=>{
    if (req.body.death === "on"){
        req.body.death = true
    }else{
        req.body.death = false
    }
})

//EDIT
router.get("/:id/edit", (req, res)=>{
    Heros.findById(req.params.id, (error, foundHero)=>{
        res.render("heros/edit.ejs", {
            hero: foundHero
        })
    })
})

//SHOW
router.get("/:id", (req, res)=>{
    Heros.findById(req.params.id, (err, foundHero)=>{
        res.render("heros/show.ejs", {
            hero: foundHero
        })
    })
})

module.exports = router