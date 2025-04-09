const express = require('express');
const db = require('../db'); // Import database connection
const router = express.Router();

// Get destinations for a specific state (default: Himachal Pradesh)
router.get('/destinations', (req, res) => {
    const { state } = req.query;
    if (!state) return res.status(400).json({ error: 'State is required' });

    const query = 'SELECT * FROM destinations WHERE state = ?';
    db.query(query, [state], (err, results) => {
        if (err) {
            console.error('Error fetching destinations:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        console.log("Fetched Destinations:", results); 
        res.json(results);
    });
});


// Get destination details by ID
router.get('/destinations/:id', (req, res) => {
    const { id } = req.params;

    const query = 'SELECT * FROM destinations WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            console.error('Error fetching destination details:', err);
            return res.status(500).json({ error: 'Database error' });
        }

        if (result.length === 0) {
            return res.status(404).json({ error: 'Destination not found' });
        }

        res.json(result[0]);
    });
});

module.exports = router;
