var express         = require('express'),
    todoRoutes      = express.Router(),
    todoController  = require('../controllers/todo_controller.js')

/////////////////////////
// create routes for /api
todoRoutes.route('/api')
  .get(todoController.index)
  .post(todoController.create)
  .delete(todoController.destroy)

  module.exports = todoRoutes
