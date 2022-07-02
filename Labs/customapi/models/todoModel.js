const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    description: { type: String, required: true },
    complete: { type: Boolean }
});

const Todos = mongoose.model('Todo', todoSchema);

module.exports = Todos;