const express=require("express");
const app=express();
require("./db/conn");
const Data = require("./model/userSchema");
const RegisterData =  require("./route/registerData")
const Login =  require("./route/login")


const cors = require('cors');

app.use(express.json());
app.use(cors())
app.use(RegisterData);
app.use(Login);



app.listen(5000,()=>{
    console.log("Run on port number 5000");
});