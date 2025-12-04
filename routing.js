const http = require("http")
const fs = require("fs")

// console.log(http.METHODS);  // objects printing from http



http.createServer((req,res) =>{
    if(req.url==='/'){
        fs.readFile("sample.html",(error,data)=>{
            if(data){
                res.writeHead(200,{'content-type' : 'text/html'})
                res.write(data)
                res.end()
            }else{
                res.writeHead(500,{'content-type': 'text/plain'})
                res.write("internal server error")
                console.log(error);
                
                res.end()
            }
        })
    }else if(req.url==='/login'){
        fs.readFile("loginpage.html",(error,data)=>{
            if(data){
                res.writeHead(200,{'content-type' : 'text/html'})
                res.write(data)
                res.end()
            }
            else{
                res.writeHead(500,{'content-type': 'text/plain'})
                res.write("internal server error")
                console.log(error);
                res.end()
            }
        })
    }

    

})

.listen(5000,console.log("server is running successfully..."))



