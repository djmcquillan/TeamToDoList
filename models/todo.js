var mongoose = require('mongoose')

var todoSchema = new mongoose.Schema({
  list_item: String
})

var Todo = mongoose.model('Todo', todoSchema)

module.export = Todo
