const mongoose = require('mongoose')

const RestSchema = new mongoose.Schema({
    branch:{
        type: String,
        required:true,
        unique:true
    },
    RefuelMax:{
        type:Object
    },
    Refuel:{
        type:Object
    },
    RefuelDodo:{
        type:Object
    },
    ChickWizz:{
        type:Object
    },
    ChickWizzMeal:{
        type:Object
    },

    },{timestamps:true})

    const RestaurantModel = mongoose.model("Restaurant Api", RestSchema)

module.exports= RestaurantModel