const Todo = require('../models/todoModel');

// Get all todos for the logged-in user
const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({ user: req.userId }); 
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve todos.' });
    }
};

// Create a new todo
const createTodo = async (req, res) => {
    const { description, date } = req.body;

    if (!description || !date) {
        return res.status(400).json({ message: 'Description and date are required.' });
    }

    try {
        const newTodo = new Todo({ description, date, user: req.userId }); 
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create todo.' });
    }
};

// Update an existing todo
const updateTodo = async (req, res) => {
    const { id } = req.params;
    const { description, date } = req.body;

    if (!description || !date) {
        return res.status(400).json({ message: 'Description and date are required.' });
    }

    try {
        const todo = await Todo.findOneAndUpdate(
            { _id: id, user: req.userId },
            { description, date },
            { new: true }
        );
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found.' });
        }
        res.json(todo);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update todo.' });
    }
};

// Delete a todo
const deleteTodo = async (req, res) => {
    const { id } = req.params;

    try {
        const todo = await Todo.findOneAndDelete({ _id: id, user: req.userId }); 
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found.' });
        }
        res.json({ message: 'Todo deleted successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete todo.' });
    }
};

// Toggle the is_checked status
const toggleTodo = async (req, res) => {
    const { id } = req.params;

    try {
        const todo = await Todo.findOne({ _id: id, user: req.userId }); 
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found.' });
        }

        todo.is_checked = !todo.is_checked;
        await todo.save();
        res.json(todo);
    } catch (error) {
        res.status(500).json({ message: 'Failed to toggle todo status.' });
    }
};

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
    toggleTodo
};