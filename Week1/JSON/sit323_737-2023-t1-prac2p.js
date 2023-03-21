var express = require('express')
var app = express()

// respond with "hello world" when a GET request is madew to the hompeage
app.get('/', function (req,res) {
    res.send("Hello world")
})

//list to a particular port
app.listen(3000)
//VISIT http://localhost:3000



// to find the message