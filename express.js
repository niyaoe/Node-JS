const express = require("express")
const app = express()

app.get("/endpoint",(req,res)=>{
    const data = {
        name : "Niyas",
        Age : 21,
        Place : "Karad City"
    }
    res.json(data)
    res.send("umair method") 
})
app.get("/login",(req,res)=>{
    res.send("get methord another route = login")
})



app.listen(5000,console.log("server is running succesfully"))