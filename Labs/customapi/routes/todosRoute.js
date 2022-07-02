const Todos = require('../models/todoModel');
const router = require('express').Router();

const {
    getTodos,
    postTodo,
    deleteTodo,
    putTodo
} = require('../controllers/todosController');

router.route('/')
    .get(getTodos)
    .post(postTodo);

router.route('/:id')
    .delete(deleteTodo)
    .put(putTodo);

module.exports = router;