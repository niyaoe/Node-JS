const express = require("express")
const app = express()
const path = require("path")

app.get("/",(req,res)=>{
    const filePath = path.join(__dirname,"loginpage.html")

    console.log("current directory:",__dirname); //current directory
    console.log("filename:",__filename);

    res.sendFile(filePath)
    
})




app.listen(5000,console.log("server is running succesfully"))