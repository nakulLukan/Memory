const express = require('express');
const task = require('./task.ctrl');

const router = express.Router();
router.get('/api/todos',task.getAllTasks);

module.exports = router;