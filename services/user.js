
const Users = require('../models/user');

async function getAllUsers()
{
    return Users.find();
}

async function getUsersById(userid)
{
    return Users.findById(userid);
}

async function getUsersByName(userName)
{
    return Users.find({
        name: {
            $regex: userName
        }
    });
}

async function newUser(user)
{
    const newUser = new Users(user);
    return newUser.save();
}

async function updateUser(userid,user)
{
    return Users.findByIdAndUpdate(userid,user,{new: true});
}

async function deleteUser(userid)
{
    return Users.findByIdAndDelete(userid);
}

module.exports = {
    getAllUsers,
    getUsersById,
    getUsersByName,
    newUser,
    updateUser,
    deleteUser,
}