const express = require('express');
const router = express.Router();
const {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
    toggleTodo
} = require('../controllers/todoController');
const verifyToken = require('../middleware/authMiddleware');

// Define routes for todos with JWT authentication
router.get('/', verifyToken, getTodos);
router.post('/', verifyToken, createTodo);
router.put('/:id', verifyToken, updateTodo);
router.delete('/:id', verifyToken, deleteTodo);
router.patch('/:id/toggle', verifyToken, toggleTodo);

module.exports = router;