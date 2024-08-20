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
/*const UserSchema = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  email: {type: String, required: true}
});


const User = mongoose.model("socialusers",UserSchema);
*/
const FeedSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  image: String,
  avatarLetter: String,
  badgeContent: Number,
  creationDate: Date,
  price: String,
  location: String,
  contact: String
});

const Feed = mongoose.model("feed", FeedSchema);
/*
app.get("/user", async(req,res)=>{
  try{
    const user= await User.find({});
  
    res.status(201).send({user: user, message: "Fetched User"})
  }
  catch(e){
    res.status(500).send({message: "Could not fetch user!"})
  }

});
*/
app.get("/feed", async(req,res)=>{
  try{
    const feed = await Feed.find({});
    res.status(201).send({feed: feed, message: "Fetched Feed"})
  }
  catch(e){
    res.status(500).send({message: "Could not fetch feed!"})
  }
 
});


app.post ("/addFeed", async(req, res)=>{
  try{
    const feedToAdd = req.body;
    await Feed.create(feedToAdd);
    console.log("Add Feed")
    res.status(201).send({message:"Added new User"})
  }
  catch(e){
    res.status(500).send({message: "Could not add user!"})
  }
});

app.delete("/deleteFeed/:idParam", async(req,res)=>{
  try{
    const {idParam}=req.params;
    await Feed.deleteOne({id:idParam});
    res.status(201).send("Feed deleted")
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