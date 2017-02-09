require('dotenv').config();
var express = require('express')
app = express();
bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))

require('./app/routes')(app)
require('./app/controller')
app.listen('3000', function(err){
  if (err) {
    console.log(err)
  }
  console.log('app starting on port 3000')
})