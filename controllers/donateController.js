const db = require('../db');

exports.submitDonation = (req, res) => {
  const { name, amount, category, email } = req.body;

  const sql = 'INSERT INTO donations (name, amount, category, email) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, amount, category, email], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Donation submitted successfully' });
  });
};
