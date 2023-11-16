
const Todos = require('../services/todo');

async function getAllTodo(req,res,next)
{
   try {
       const todo = await Todos.getAllTodo();
       if (!todo) throw Error('No todos');
       await res.status(200).json(todo);
   } catch (err) {
       res.status(404).json({
           message: err
       })
   }
}

async function getTodoById(req,res,next)
{
    try {
        const todo = await Todos.getTodoById(req.params['id']);
        if (!todo) throw Error('No todos');
        await res.status(200).json(todo);
    } catch (err) {
        res.status(404).json({
            message: err
        })
    }
}

async function getTodoByTitle(req,res,next)
{
    try {
        const todo = await Todos.getTodoByTitle(req.params['title']);
        if (!todo) throw Error('No todos');
        await res.status(200).json(todo);
    } catch (err) {
        res.status(404).json({
            message: err
        })
    }
}

async function newTodo(req,res,next)
{
    try {
        const todo = await Todos.newTodo(req.body);
        if (!todo) throw Error('No todos created');
        await res.status(201).json(todo);
    } catch (err) {
        res.status(404).json({
            message: err
        })
    }
}

async function updateTodo(req,res,next)
{
    try {
        const todo = await Todos.updateTodo(req.params['id'],req.body);
        if (!todo) throw Error('No todos updated');
        await res.status(201).json(todo);
    } catch (err) {
        res.status(404).json({
            message: err
        })
    }
}

async function deleteTodo(req,res,next)
{
    try {
        const todo = await Todos.deleteTodo(req.params['id']);
        if (!todo) throw Error('No todos deleted');
        await res.status(200).json(todo);
    } catch (err) {
        res.status(404).json({
            message: err
        })
    }
}

module.exports = {
    getAllTodo,
    getTodoById,
    getTodoByTitle,
    newTodo,
    updateTodo,
    deleteTodo,
}