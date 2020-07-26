const http = require('http')
const path = require('path')
const fs = require('fs')
const server = http.createServer((req,res)=>{
    // if(req.url === '/'){
    //     fs.readFile(path.join(__dirname,'public','home.html'),
    //     (err,data)=>{
    //         if (err) throw err;
    //         res.writeHead(200,{'Content-Type':'text/html'});
    //         res.end(data);
    //     })
    // }

    // if(req.url === '/api/users'){
    //     const users = [
    //         {
    //             name:'Chakshu',
    //             age:40
    //         },
    //         {
    //             name:'Tanuj ',
    //             age:38
    //         }
    //         ]
    //     res.writeHead(200,{'Content-Type':'application/json'})
    //     res.end(JSON.stringify(users))
    // }
    
    // Dynamic  urls
    let filePath = path.join(__dirname,'public',req.url=== '/'?
    'home.html' : req.url)
    
    let extname = path.extname(filePath)
    let contentType = 'text/html'
    switch(extname){
        case '.js':
            contentType = 'text/javascript'
            break;
        case '.css':
            contentType = 'text/css'
            break;
        case '.json':
            contentType = 'application/json'
            break;
        case '.png':
            contentType = 'image/png'
            break;
        case '.jpg':
            contentType = 'image/jpg'
            break;
    }
    // console.log(filePath);
    // console.log(extname);
    // console.log(contentType);
    fs.readFile(filePath,(err,content)=>{
        if(err){
            if(err.code === 'ENONET'){
                fs.readFile(path.join(__dirname,'public','404.html'),(err,data)=>{
                    res.writeHead(200,{'Content-Type':'text/html'})
                    res.end(data);
                })
            }
            else{
                res.writeHead(500)
                res.end(`Server Error ${err.code}`)
            }
        }
        else{
            res.writeHead(200,{'Content-Type':contentType})
            res.end(content)
        }
    })
})


const PORT = process.env.PORT || 5000;
server.listen(PORT,()=>{console.log(`Server running on Port ${PORT}`);});