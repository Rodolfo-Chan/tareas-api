const express = require('express');
const router = express.Router();
const taskCtrl = require('../controllers/task.controller');
const validateTask = require('../middlewares/validateTask');

router.get('/', taskCtrl.getAllTasks);
router.get('/:id', taskCtrl.getTaskById);
router.post('/', validateTask, taskCtrl.createTask);
router.put('/:id', validateTask, taskCtrl.updateTask);
router.delete('/:id', taskCtrl.deleteTask);

module.exports = router;
