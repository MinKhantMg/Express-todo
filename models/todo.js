
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TodoSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
    },
    title: {
        type: String,
        required: true,
    },
    completed: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Todos', TodoSchema);