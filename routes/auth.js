// backend/routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');

const router = express.Router();

// Sign up route
router.post('/signup', (req, res) => {
  const { name, email, password, role } = req.body;

  // Hash the password before storing it
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ message: "Error hashing password" });
    }

    // Insert new user into the database
    const query = 'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)';
    db.query(query, [name, email, hashedPassword, role], (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Error inserting user into database", error: err });
      }

      res.status(201).json({ message: "User created successfully", userId: result.insertId });
    });
  });
});

// Sign in route
router.post('/signin', (req, res) => {
  const { email, password } = req.body;

  // Get user by email
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error fetching user", error: err });
    }

    if (result.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare password with stored hash
    bcrypt.compare(password, result[0].password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ message: "Error comparing passwords" });
      }

      if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // Generate a token
      const token = jwt.sign({ userId: result[0].id, role: result[0].role }, 'secretkey', { expiresIn: '1h' });

      res.status(200).json({ message: "Login successful", token });
    });
  });
});

module.exports = router;
