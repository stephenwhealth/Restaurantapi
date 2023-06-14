const express = require("express")
const router= express.Router()
const {foodmenu, getone, getall, deleteone, update}=require("../FoodController/foodController")

router.get("/", (req,res)=>{
    res.send("WELCOME TO MY RESTAURANT API")
});

router.post("/create",foodmenu)
router.get("/getall", getall)
router.get("/getby/:branch",getone)
router.delete("/delete/:id",deleteone)
router.patch("/update/:id",update)


module.exports=router