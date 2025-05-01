const express = require("express");

const Game = require("../controllers/Game")
const category = require("../controllers/Category")
const router = express.Router();


//get game by id 
router.get("/:id",async(req , res) =>{
    console.log("pepeppe" , req.params);
    try{
        const gamedata = await Game.findById(req.params.id).populate("categories");
        console.log(gamedata);
        
        if(!gamedata)
        {
            console.log(req.params);
            return res.status(404).json({message:"Game not found"});
        }
        res.json(gamedata);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({message: err.message});
    }
})
module.exports = router;
