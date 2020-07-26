const express = require('express');
const logger = require('./logger')
const members = require('./Members')
const path = require('path');
var exphbs  = require('express-handlebars');
const app = express()

// Setting Template Engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Initializing middleware
// app.use(logger)

// Body Parser middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Api Routes
app.use('/api/members',require('./routes/api/members'))

// HomePage route
app.get('/',(req,res)=>{
    res.render('index',{
        title:'Members APP',
        members:members
})
})


// Serving Static Files
app.use(express.static(path.join(__dirname,'public')))



const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server running on ${PORT}`))