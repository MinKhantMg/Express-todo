
const Users = require('../services/user');

async function getAllUsers(req,res,next)
{
    try {
        const users = await Users.getAllUsers();
        if(!users) throw Error ('No users');
        await res.status(200).json(users);
    } catch (err) {
        res.status(404).json({
            message: err
        })
    }
}

async function getUserById(req,res,next)
{
    try{
        const user = await Users.getUsersById(req.params['id']);
        if(!user) throw Error ('No users');
        await res.status(200).json(user);
    } catch (err) {
        res.status(404).json({
            message: err
        })
    }
}

async function getUserByName(req,res,next)
{
    try{
        const user = await Users.getUsersByName(req.params['name']);
        if (!user) throw Error ('No users');
        await res.status(200).json(user);
    } catch (err) {
        res.status(404).json({
            message: err
        })
    }
}

async function newUser(req,res,next)
{
    try {
        const user = await Users.newUser(req.body);
        if (!user) throw Error ('No user created!!');
        await res.status(201).json(user);
    } catch (err) {
        res.status(404).json({
            message: err
        })
    }
}

async function updateUser(req,res,next)
{
    try{
        const user = await Users.updateUser(req.params['id'],req.body);
        if (!user) throw Error ('No user updated');
        await res.status(201).json(user);
    } catch (err) {
        res.status(404).json({
            message: err
        })
    }
}

async function deleteUser(req,res,next)
{
    try {
        const user = await Users.deleteUser(req.params['id']);
        if (!user) throw Error('No user deleted');
        await res.status(200).json(user);
    } catch (err) {
        res.status(404).json({
            message: err
        })
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    getUserByName,
    newUser,
    updateUser,
    deleteUser,
}

