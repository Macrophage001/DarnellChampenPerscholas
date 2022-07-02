const Todos = require("../models/todoModel");

const tryCatch = (t, e = (err) => console.log(err)) => {
    return (...args) => {
        try {
            return t.apply(this, args);
        } catch (err) {
            e(err);
        }
    }
}

const getTodos = ((req, res) => {
    tryCatch(async () => {
        Todos.find({}, (err, foundTodos) => {
            res.json(foundTodos);
        });
    })();
});
const postTodo = ((req, res) => {
    tryCatch(async () => {
        Todos.create(req.body, (err, createdTodo) => {
            res.json(createdTodo);
        });
    })();
});

const deleteTodo = ((req, res) => {
    tryCatch(async () => {
        Todos.findByIdAndRemove(req.params.id, (err, deletedTodo) => {
            res.json(deletedTodo);
        });
    })();
});
const putTodo = ((req, res) => {
    tryCatch(async () => {
        Todos.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedTodo) => {
            res.json(updatedTodo);
        });
    })();
});

module.exports = {
    getTodos,
    postTodo,
    deleteTodo,
    putTodo
}