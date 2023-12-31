
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    "userId": {
        type: Number,
        required: true,
    },
    "name": {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Users', UserSchema);