const task = require('./task.service');

const getAllTasks = async (req, res) => {
    const todos = await task.getAllTodos();
    return res.send(todos);
};

module.exports = {
    getAllTasks
}