const express = require('express');
const router = express.Router();
const db = require('../db'); // Ensure this connects to MySQL

// Get destination details by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM destinations WHERE id = ?';

    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error fetching destination:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Destination not found' });
        }
        res.json(results[0]); // Send the first matching destination
    });
});

module.exports = router;
