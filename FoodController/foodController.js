const express=require("express")
const RestaurantModel=require("../FoodModel/restaurantModel")


// function to create a food menu

async function foodmenu(req,res){try {

    const menu = await RestaurantModel.create(req.body)
    res.status(200).json({
        message:`the menu for the ${menu.branch} branch has been created succesfully`,
        data: menu
    })
    
} catch (error) {
    res.status(400).json(error.message)
}}


// get one by branch

const getone = async(req,res)=>{
    try {
        const one = await RestaurantModel.findOne(req.params)
        res.status(200).json({
            message:`the data for the searched branch ${one.branch}`,
            data: one
        })
        
    } catch (error) {
        res.status(400).json(error.message)
    }
}

// getting all data

const getall = async(req,res)=>{
    try {
        const all = await RestaurantModel.find()
        res.status(200).json({
            message:`the total number of data available on the database is ${all.length}`,
            data: all
        })
        
    } catch (error) {
        res.status(400).json(error.message)
    }
}

// deleting a full data


const deleteone = async(req,res)=>{
    try {
        const deleted = await RestaurantModel.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message:`the ${deleted.branch} branch has been deleted and the total branch is now ${RestaurantModel.length}`,
            data: deleted
        })
        
    } catch (error) {
        res.status(400).json(error.message)
    }
}


// updating a menu

const update = async(req,res)=>{
    try {
        const newdata = await RestaurantModel.findById(req.params.id)
        const albert = await RestaurantModel.updateOne({"RefuelMax.main":newdata.RefuelMax.main},
        {$set:{"Refuel.main":req.body.main, "RefuelMax.main":req.body.main, "RefuelDodo.main":req.body.main, "ChickWizz.main":req.body.main, "ChickWizzMeal.main":req.body.main,}
    }
    )
        const updated = await RestaurantModel.findById(newdata)
        res.status(200).json({
            message:`the ${updated.branch} branch has been updated`,
            data: albert, updated
        })
        
    } catch (error) {
        res.status(400).json(error.message)
    }
}


module.exports={
    foodmenu, 
    getone,
    getall,
    deleteone,
    update
}