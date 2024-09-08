const mongoose = require('mongoose');

// Define the Todo Schema
const todoSchema = new mongoose.Schema({
    description: { type: String, required: true },
    date: { type: String, required: true },
    is_checked: { type: Boolean, default: false }
}, {
    timestamps: true
});

// Create and export the Todo model
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;