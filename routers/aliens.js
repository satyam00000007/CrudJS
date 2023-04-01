const express = require('express')
const router = express.Router()
const Alien = require("../models/aliens")

router.get('/',async(req,res) => {
    try{
            const aliens = await Alien.find()
            res.json(aliens)
    }catch(err){
        res.send("Error" + err)
    }
})

router.get('/:id',async(req,res) => {
    try{
            const aliens = await Alien.findById(req.params.id)
            res.json(aliens)
    }catch(err){
        res.send("Error" + err)
    }
})


router.post('/', async(req,res)=>{
    console.log(req.body);
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try{
        const a1 = await alien.save()
        res.json(a1)
        
    }catch(err){
        res.send(err)
    }
})

router.patch('/:id', async(req,res)=>{
    console.log(req.body);
    const alien = await Alien.findById(req.params.id)
    if(req.body.name){
        alien.name= req.body.name;
    }
    if(req.body.tech){
        alien.tech= req.body.tech;
    }
    if(req.body.sub){
        alien.sub= req.body.sub;
    }

    try{
        const a1 = await alien.save()
        res.json(a1)
        
    }catch(err){
        res.send(err)
    }
})

module.exports = router