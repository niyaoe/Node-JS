const http = require("http")
// const fs = require("fs")

// console.log(http.METHODS);  // objects printing from http



http.createServer((req,res) =>{
   const data = {
    name : "niyas",
    age : 20
   }
    
   res.writeHead(200,{"content-type":"application/json"})
   res.end(JSON.stringify(data))

})

.listen(5000,()=>console.log("server is running successfully..."))



