const express=require("express");
const app=express();
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const cors=require("cors");
const router=require("./routes/route")
app.use(cors());
app.use(express.json());
app.use("/api",router)
require("dotenv").config()
mongoose.connect("mongodb://127.0.0.1:27017/crud").then(()=>console.log("database connected"))


app.listen(5000,()=>{
    console.log("server running")
})