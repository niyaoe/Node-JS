const express = require("express");
const path = require("path")
const app = express();

const middleware = (req,res,next) =>{
    console.log("this is middleware function");
    console.log(req.token);
    
    next()

}

app.get("/", middleware , (req, res) => {
    const pathfile = path.join(__dirname,"cc.PNG")
    console.log(__dirname);
    
    res.sendFile(pathfile)
});

app.listen(5000, console.log("server is running succesfully"));
