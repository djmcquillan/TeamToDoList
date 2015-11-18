var Todo = require('../models/todo.js')

function index(req, res){
  Todo.find({}, function(err, todos){
    if (err) res.send(err)
    res.json(todos)
  })
}

function create(req, res){
  var todo = new Todo (req.body.todo)

  todo.list_item = req.body.list_item
  todo.save(function(err){
    if (err) res.send(err)
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
