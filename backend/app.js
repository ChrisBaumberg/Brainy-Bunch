require ("dotenv").config();

const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const mongoose = require("mongoose");

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
