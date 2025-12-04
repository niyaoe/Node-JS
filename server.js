const http = require("http")
const fs = require("fs")

// console.log(http.METHODS);  // objects printing from http



http.createServer((req,res) =>{
    fs.readFile("sample.html",(error,data)=>{
        res.writeHead(200,{"content-type": 'text/html'})
        res.write(data)
        res.end()


    })
    

})

.listen(5000,console.log("server is running successfully..."))



