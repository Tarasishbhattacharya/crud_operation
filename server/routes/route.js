const express=require("express");
const router=express.Router();
const User=require("../model/userschema")


router.route("/register").post(async(req,res)=>{
    const{name,age,email,mobile,work,add,desc}=req.body;
    if(!name || !age || !email || !mobile || !work || !add || !desc){
        res.status(404).send({msg:"plz fill the data"})
    }

    try {
        let user=await User.findOne({email:email});
        if(user){
            res.status(404).send({msg:"user already exist"})
        }
        user=await User.create({
            name,
            email,
            age,
            mobile,
            work,
            add,
            desc
        })
        res.status(201).json(user)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

router.route("/alluser").get(async(req,res)=>{
    try {
        const user=await User.find();
        if(!user){
            res.status(404).json("No user data")
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json(error)
    }
})

// individual user

router.route("/user/:id").get(async(req,res)=>{
    try {
        const {id}= req.params
         const individualuser=await User.findById({_id:id});
         res.status(200).json(individualuser)
    } catch (error) {
        res.status(400).json(error)
    }
})

// edit data

router.route("/update/:id").patch(async(req,res)=>{
    try {
         const{id}=req.params;
         const updateduser=await User.findByIdAndUpdate(id,req.body,{new:true})
         res.status(201).json(updateduser)
    } catch (error) {
        res.status(201).json(error)
    }
})

// delete user

router.route("/delete/:id").delete(async(req,res)=>{
    const{id}=req.params;
    const deleteduser=await User.findByIdAndDelete({_id:id});
    res.status(201).json(deleteduser)
})

module.exports=router