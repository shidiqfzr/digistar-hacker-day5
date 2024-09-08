const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, unique: true}
}, {
    timestamps: true
});

// Create and export the User model
const User = mongoose.model('User', userSchema);

module.exports = User;