
const express = require('express');
const router = express.Router();
const users = require('../controllers/user');

router.get('/', users.getAllUsers);
router.get('/:id', users.getUserById);
router.get('/name/:name', users.getUserByName);
router.post('/', users.newUser);
router.put('/:id', users.updateUser);
router.delete('/:id', users.deleteUser);

module.exports = router;
