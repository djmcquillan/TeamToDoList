var Todo = require('../models/todo.js')

function index(req, res){
  Todo.find({}, function(err, todos){
    if (err) console.log(err)
    res.json(todos)
  })
}

function create(req, res){
  var todos = new Todo (req.body.todo)

  todo.save(function(err){
    if (err) console.log(err)
    res.json({success: true, message: 'Todo Task created!'})
  })
}


// function destroy(req,res){
// 	Todo.remove
// }


module.exports = {
  index: index
  ,create: create
}

