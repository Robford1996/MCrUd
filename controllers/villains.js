const express = require("express")
const router = express.Router()
const Villains = require("../models/villains.js")

//INDEX
router.get("/", (req, res)=>{
    Villains.find({}, (err, foundVillains)=>{
        res.render("villains/index.ejs", {
            villains: foundVillains
        })
    })
})

//NEW
router.get("/new", (req, res)=>{
    res.render("villains/new.ejs")
})

//DELETE
router.delete("/:id", (req, res)=>{
    Villains.findOneAndDelete(req.params.id, ()=>{
        res.redirect("villains")
    })
})

//UPDATE
router.put("/:id", (req, res)=>{
    if(req.body.death === "on"){
        req.body.death = true
    }else{
        req.body.death = false
    }
Villains.findByIdAndUpdate(req.params.id, req.body, ()=>{
    res.redirect("villains")
})
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
    Villains.findById(req.params.id, (err, foundVillain)=>{
        res.render("villains/edit.ejs", {
            villain: foundVillain
        })
    })
})

//SHOW
router.get("/:id", (req, res)=>{
    Villains.findById(req.params.id, (err, foundVillain)=>{
        res.render("villains/show.ejs", {
            villain: foundVillain
        })
    })
})

module.exports = router