import express from 'express';
import * as ctrl from './list-threads/list-threads.ctrl';

const router = express.Router();
router.get('/api/threads', ctrl.getThreads);

module.exports = router;