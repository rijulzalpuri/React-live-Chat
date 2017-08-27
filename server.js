var express = require('express')
var app = express()
app.use(express.static('./public'))
let port = 3002
app.listen(port);
console.log('Server Running on port',port)