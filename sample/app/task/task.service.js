const Todo = require('../../models').Todo;

/**
 * Get all todos.
 * @param {Function} func fetch todos from db
 */
const getAllTodos = async (GetTodos = getTodos) => {
    return GetTodos().then(res=> {
        return res;
    });
}

const getTodos = async () => {
    return Todo.findAll();
}

module.exports = {
    getAllTodos
}