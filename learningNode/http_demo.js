const http = require('http')
http.createServer((req,res)=>{
    // console.log(req);
    res.write("Helloo");
    res.end();
}).listen(9000,() =>{console.log("Server running");})