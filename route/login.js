const express = require("express");
const router = express.Router();
const Data = require("../model/userSchema");
require("../db/conn");

router.post("/Login", async (req, res) => {
    const { Username, Password} = req.body; 
    if ( !Username ||  !Password){
        res.send("Username and Password Required.")
        
        return
    }
  
    const response = await Data.find({
        "Username" : Username
    
    });
    if (!response || response.length === 0){
        res.send({"Message" : "Invaild User"})
        
        return
    }
    if ( Password !== response[0].Password){
        res.send({"Message" : "Invaild Password"})

        return
    }
    res.send({"Message" : "Success"})

});

  module.exports = router;