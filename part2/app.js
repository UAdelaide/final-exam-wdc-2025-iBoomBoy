const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

// Routes
const walkRoutes = require('./routes/walkRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/walks', walkRoutes);
app.use('/api/users', userRoutes);
app.use(session({
  secret: 'dogwalk_secret', // use env var in real apps
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // set to true only if HTTPS
}));


// Export the app instead of listening here
module.exports = app;