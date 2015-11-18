var express     = require('express')
var app         = express()
var logger      = require('morgan')
var bodyParser  = require('body-parser')
var mongoose    = require('mongoose')
var port        = process.env.PORT || 3000
var todoRoutes  = require('./routes/routes')
var ejs         = require('ejs')
var ejsLayouts  = require('express-ejs-layouts')

//app configuration
app.set('view engine', 'ejs')

//////////////////////////////////
//CONNECT TO THE MONGOOSE DATABASE
mongoose.connect('mongodb://localhost/todolist')

////////////////
//MIDDLEWARE
app.use(logger('dev'))

////////////////
//STATIC ASSETS
app.use(express.static('public'))

//makes json object available in requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

/////////////
//API ROUTES
app.use('/api', todoRoutes)

///////////////////////////////////////
//SETTING THE SERVER TO LISTEN ON PORT
app.listen(port, function (){
  console.log('The server is listening on ', port)
})
