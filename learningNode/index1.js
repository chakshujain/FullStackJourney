// const path = require('path')
// const os = require('os')
// const url = require('url')
// console.log(path.basename(__filename))
// console.log(path.dirname(__filename))
// console.log(__dirname)
// console.log(path.parse(__filename))
// console.log(os.platform())
// console.log(os.arch())
// const myUrl = new URL("http://mywebsite.com:8000/hello.html?id=20&status=active");

// console.log(myUrl.href);
// console.log(myUrl.pathname);
// console.log(myUrl.host);
// console.log(myUrl.hostname);
// console.log(myUrl.search);
// console.log(myUrl.searchParams);
// myUrl.searchParams.append("name","Chakshu")
// myUrl.searchParams.forEach((val,key)=>{ 
//     console.log(`${key} = ${val}`);
// })
const Logger = require('./logger')
const logger = new Logger()
logger.on('message',(data)=>{console.log('Called Listener' ,data);})
logger.log('Hello world');
