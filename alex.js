const express = require("express")
const mongoose = require("mongoose")
const port = 7008
const app = express()
app.use(express.json())
const router= require("./Router/foodRouter")
app.use(router)



mongoose.connect("mongodb+srv://ujunwastephen8:xGjyHONGYYa1TcUi@cluster0.juh5no5.mongodb.net/").then(()=>{
    console.log("connection to the database is correct")
})

app.listen(port, ()=>{
    console.log(`server is listening to port ${port}`)
})