const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../db'); 
const router = express.Router();

// ✅ Admin Registration
router.post('/admin/register', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const sql = 'INSERT INTO admins (username, email, password) VALUES (?, ?, ?)';
  db.query(sql, [username, email, hashedPassword], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Database error' });
    }
    res.status(201).json({ message: 'Admin registered successfully' });
  });
});

// ✅ Admin Login Route
router.post('/admin/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  const sql = 'SELECT * FROM admins WHERE username = ?';
  db.query(sql, [username], async (err, results) => {
    if (err) return res.status(500).json({ message: 'Database error' });

    if (results.length === 0) {
      return res.status(401).json({ message: 'Admin not found' });
    }

    const admin = results[0];
    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    req.session.admin = admin;
    res.json({ success: true, message: 'Login successful', admin });
  });
});

router.get('/admin/stats', async (req, res) => {
  try {
    const usersQuery = 'SELECT COUNT(*) AS totalUsers FROM users';
    const destinationsQuery = 'SELECT COUNT(*) AS totalDestinations FROM destinations';

    db.query(usersQuery, (err, usersResult) => {
      if (err) {
        console.error('❌ Error fetching users:', err.sqlMessage || err);
        return res.status(500).json({ error: 'Database error - Users' });
      }

      db.query(destinationsQuery, (err, destinationsResult) => {
        if (err) {
          console.error('❌ Error fetching destinations:', err.sqlMessage || err);
          return res.status(500).json({ error: 'Database error - Destinations' });
        }

        console.log('✅ Stats Fetched:', {
          totalUsers: usersResult[0].totalUsers,
          totalDestinations: destinationsResult[0].totalDestinations,
        });

        res.json({
          totalUsers: usersResult[0].totalUsers,
          totalDestinations: destinationsResult[0].totalDestinations,
        });
      });
    });
  } catch (error) {
    console.error('❌ Error fetching stats:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


router.get("/admin/profile", (req, res) => {
  if (!req.session.admin) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const adminId = req.session.admin.id; // Get admin ID from session
  const sql = "SELECT email FROM admins WHERE id = ?";

  db.query(sql, [adminId], (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.json({ email: results[0].email });
  });
});


router.post("/admin/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(500).json({ error: "Logout failed" });
    res.clearCookie("connect.sid"); 
    return res.status(200).json({ message: "Logged out successfully" });
  });
});

module.exports = router;

