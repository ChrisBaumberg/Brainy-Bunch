require ("dotenv").config();

const express = require("express");
const app = express();
const port = 3002;
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt= require("bcryptjs");
//const UserSchema = require("./models/User");
const axios = require("axios");

const connectString= "mongodb+srv://socialuser:brainybunch@cluster0.alw3pzv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const {v4: uuidv4}=require("uuid")




app.use(express.json());
app.use(cors());

app.use(async(req, res, next)=>{
  try{
    await mongoose.connect(connectString);
    console.log("Running connection");
    next();
  }
  catch(e){
    console.log("Running error")
  }
});
const UserSchema = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  email: {type: String, required: true}
});
const User = mongoose.model("socialusers",UserSchema)
app.get("/user", async(req,res)=>{
  try{
    const user= await User.find({});
  
    res.status(201).send({user: user, message: "Fetched User"})
  }
  catch(e){
    res.status(500).send({message: "Could not fetch user!"})
  }
});

app.post ("/addUser", async(req, res)=>{
  try{
    const userToAdd = req.body;
    await User.create(userToAdd);
    console.log("AddUser")
    res.status(201).send({message:"Added new User"})
  }
  catch(e){
    res.status(500).send({message: "Could not add user!"})
  }
});

app.delete("/deleteUser/:idParam", async(req,res)=>{
  try{
    const {idParam}=req.params;
    await User.deleteOne({id:idParam});
    res.status(201).send("User deleted")
  }
  catch(e){
    res.status(500).send({message: "Delete didn't work"})
  }
});
/*
app.put("/changeUser/:idParam", async(req,res)=>{
  const{idParam}=req.params;
  console.log(idParam)
})
*/
app.get("/", (req, res) => {
  res.send("Hallo");
  
});

app.listen(port, () => {
  console.log(`Brainy-Bunch app listening on port ${port}`);
});