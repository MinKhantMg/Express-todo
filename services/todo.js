
const Todos = require('../models/todo');
const mongoose = require('mongoose');

async function getAllTodo()
{
    return Todos.find().populate('user');
}

async function getTodoById(todoId)
{
    return Todos.findById(todoId).populate('user');
}

async function getTodoByTitle(todoTitle)
{
    return Todos.find({
        title: {
            $regex: todoTitle
        }
    }).populate('user');
}

async function newTodo(todo)
{
    const newTodo = new Todos({
        user: mongoose.Types.ObjectId(todo.user),
        title: todo.title,
        completed: todo.completed,
    });

    await newTodo.save();
    return newTodo.populate('user');
}

async function updateTodo(todoId,todo)
{
    return Todos.findByIdAndUpdate(todoId,todo,{new: true}).populate('user');
}

async function deleteTodo(todoId)
{
    return Todos.findByIdAndDelete(todoId);
}

module.exports = {
    getAllTodo,
    getTodoById,
    getTodoByTitle,
    newTodo,
    updateTodo,
    deleteTodo,
}