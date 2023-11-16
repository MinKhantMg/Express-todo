
const todos = require('../controllers/todo');
const express = require('express');
const router = express.Router();

router.get('/', todos.getAllTodo);
router.get('/:id', todos.getTodoById);
router.get('/title/:title', todos.getTodoByTitle);
router.post('/', todos.newTodo);
router.put('/:id', todos.updateTodo);
router.delete('/:id', todos.deleteTodo);

module.exports = router;