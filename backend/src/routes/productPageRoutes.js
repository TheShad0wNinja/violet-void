const express = require("express");

const Game = require("../controllers/Game")
const router = express.Router();


//get game by id 
router.get("/game/:id",async(req , res) =>{
    try{
        const gamedata = await Game.findById(req.params.id).populate("categories");
        if(!gamedata)
        {
            return res.status(404).json({message:"Game not found"});
        }
        res.json(gamedata);
    }
    catch(err)
    {
        res.status(500).json({message: err.message});
    }
})
module.exports = router;
