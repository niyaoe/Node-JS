const express = require("express");
const path = require("path")
const app = express();

app.get("/", (req, res) => {
    const pathfile = path.join(__dirname,"cc.PNG")
    res.sendFile(pathfile)
});

app.listen(5000, console.log("server is running succesfully"));
