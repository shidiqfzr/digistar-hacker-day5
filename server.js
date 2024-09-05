const express = require('express');
const { connectDB } = require('./config/db'); 
const todoRoutes = require('./routes/todoRoutes');

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use the Todo routes
app.use('/todos', todoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});