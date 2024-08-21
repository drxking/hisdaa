const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const session = require('express-session');
require('dotenv').config();
const userModel = require('./models/userModel');

// Import the routes
const fileRoutes = require('./routes/fileRoutes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Session configuration
app.use(session({
    secret: process.env.SESSION_SECRET || 'default-secret-key', 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production' } 
}));

// Use the routes
app.use('/', fileRoutes);


const PORT = process.env.PORT || 3000; // Use the PORT from .env
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the app for Vercel
module.exports = app;
