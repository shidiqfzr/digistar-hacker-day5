const express = require('express');
const router = express.Router();
const {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
    toggleTodo
} = require('../controllers/todoController');

// Define routes for todos
router.get('/', getTodos);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);
router.patch('/:id/toggle', toggleTodo);

module.exports = router;