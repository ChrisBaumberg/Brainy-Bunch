require ("dotenv").config();

const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt= require("bcryptjs");
const User = require("./models/User")

const {v4: uuidv4}=require("uuid")
const connectString = process.env.MONGO_DB_CLIENT;

app.use(async(req, res, next)=>{
  try{
    await mongoose.connect(connectString);
    console.log("Running connection");
    next();
  }
  catch(e){
    console.log("Running error")
  }
})

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.post ("/RegisterForm", async(req,res)=>{
  try{
    const hashedPassword = await bcrypt.hash(req,body.password, 10);
    const newUser = new User({username: req.body.username, password: hashedPassword});
    await newUser.save();
    res.status(201).send("User registered successfully");
  }
  catch(error){
    res.status(400).send(error.message);
  }
});

app.post("/LoginForm", async (req,res)=>{
  try{
    const user = await User.findOne({username: req.body.username});
    if (!user) return res.status(400).send("Invalid credentials");

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send("Invalid credentials");

    const token = jwt.sign({_id:user._id},"YOUR_SECRET_KEY",{expiresIn:"1h"});
    res.send ({token});
  }
  catch(error){
    res.status(500).send(error.message);
  }
});