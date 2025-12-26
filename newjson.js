const express = require("express")
const app = express()

app.get("/new",(req,res)=>{
    const data = {
        name : "Niyas",
        Age : 21,
        Place : "Karad City"
    }
    res.json(data)
    
})
app.get("/",(req,res)=>{
    const data = {
        name : "Vaishnav",
        Age : 21,
        Place : "Mambad City"
    }
    res.json(data)
})



app.listen(5000,console.log("server is running succesfully"))