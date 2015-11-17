var express     = require('express')
var app         = express()
var logger      = require('morgan')
var bodyParser  = require('body-parser')
var mongoose    = require('mongoose')
var port        = process.env.PORT || 3000
var todoRoutes  = require('/routes/routes')

////////////////
//MIDDLEWARE
app.use(logger('dev'))

////////////////
//STATIC ASSETS
app.use(express.static('public'))

/////////////
//API ROUTES
app.use('/api', todoRoutes)

//////////////////////////////////
//CONNECT TO THE MONGOOSE DATABASE
mongoose.connect('mongodb://localhost/todo')

///////////////////////////////////////
//SETTING THE SERVER TO LISTEN ON PORT
app.listen(port, function (){
  console.log('The server is listening on ', port)
})
