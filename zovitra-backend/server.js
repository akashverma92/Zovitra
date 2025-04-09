const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const cors = require('cors');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));


app.use(
  session({
    secret: process.env.SESSION_SECRET || 'your_secret_key', // Add this in your .env file
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // Set true if using HTTPS
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
  })
);
// MySQL Connection
const db = require('./db');

// Import and use user routes
const userRoutes = require('./routes/UserRoutes');
app.use('/api', userRoutes);
// Imported the destination routes for displaying the destianto
const destinationRoutes = require('./routes/DestinationRoutes'); 
app.use('/api',destinationRoutes);

const adminRoutes = require('./routes/AdminRoutes');
app.use('/api', adminRoutes);


// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
