const moment = require('moment');
const logger = (req,res,next)=> {
    console.log(`${req.url} logged .... Time : ${moment().format()}`);
    next()
}

module.exports = logger