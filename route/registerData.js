const express = require("express");
const router = express.Router();
const Data = require("../model/userSchema");
require("../db/conn");


router.post("/Register", async (req,res) => {
    const {Username, Email, Phone, Password, ConfirmPassword} = req.body;
    console.log(Username, Email, Phone, Password, ConfirmPassword)

    const response = await Data.create({
        Username, Email, Phone, Password, ConfirmPassword

    })

    console.log(response)
    res.send("OK")
});

module.exports = router;