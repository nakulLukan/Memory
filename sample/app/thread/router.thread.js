const express = require("express");
const listThreadController = require("./list-threads/list-thread.ctrl.js");

const router = express.Router();
router.get('/api/threads', listThreadController.getThreads);

module.exports = router;