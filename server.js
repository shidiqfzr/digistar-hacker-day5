const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// In-memory array to store todos
let todos = [];

// Function to validate input for todos
function validateTodoInput(description, date) {
    if (!description || !date) {
        return false;
    } 
    return true;
}

// Route to get all todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// Route to create a new todo
app.post('/todos', (req, res) => {
    const { description, date } = req.body;

    if (!validateTodoInput(description, date)) {
        return res.status(400).json({ message: 'Invalid input. Description and date are required.' });
    }

    const newTodo = {
        id: Date.now().toString(),
        description,
        date,
        is_checked: false,
    };

    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// Route to update an existing todo by ID
app.put('/todos/:id', (req, res) => {
    const { id } = req.params;
    const { description, date } = req.body;

    const todo = todos.find((todo) => todo.id === id);
    if (!todo) {
        return res.status(404).json({ message: 'Todo not found.' });
    }

    if (!validateTodoInput(description, date)) {
        return res.status(400).json({ message: 'Invalid input. Only description and date can be updated.' });
    }

    todo.description = description;
    todo.date = date;
    res.json(todo);
});

// Route to delete a todo by ID
app.delete('/todos/:id', (req, res) => {
    const { id } = req.params;

    const index = todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'Todo not found.' });
    }

    const deletedTodo = todos.splice(index, 1);
    res.json(deletedTodo[0]);
});

// Route to toggle the is_checked status of a todo by ID
app.patch('/todos/:id/toggle', (req, res) => {
    const { id } = req.params;

    const todo = todos.find((todo) => todo.id === id);
    if (!todo) {
        return res.status(404).json({ message: 'Todo not found.' });
    }

    todo.is_checked = !todo.is_checked;
    res.json(todo);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});