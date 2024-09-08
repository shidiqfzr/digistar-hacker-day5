const Todo = require('../models/todoModel');

// Get all todos
const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new todo
const createTodo = async (req, res) => {
    const { description, date } = req.body;

    if (!description || !date) {
        return res.status(400).json({ message: 'Description and date are required.' });
    }

    try {
        const newTodo = new Todo({ description, date });
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({ message: error.message });
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
        const todo = await Todo.findByIdAndUpdate(id, { description, date }, { new: true });
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found.' });
        }
        res.json(todo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a todo
const deleteTodo = async (req, res) => {
    const { id } = req.params;

    try {
        const todo = await Todo.findByIdAndDelete(id);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found.' });
        }
        res.json(todo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Toggle the is_checked status
const toggleTodo = async (req, res) => {
    const { id } = req.params;

    try {
        const todo = await Todo.findById(id);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found.' });
        }

        todo.is_checked = !todo.is_checked;
        await todo.save();
        res.json(todo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
    toggleTodo
};