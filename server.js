const express = require('express');
const { connectDB } = require('./config/db'); 
const todoRoute = require('./routes/todoRoute');
const userRoute = require('./routes/userRoute');

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use the Todo routes
app.use('/todos', todoRoute);

// Use the User routes
app.use('/users', userRoute); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});