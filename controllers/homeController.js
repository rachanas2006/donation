const db = require('../db');

exports.getStats = (req, res) => {
  const totalUsers = 'SELECT COUNT(*) AS users FROM users';
  const totalDonations = 'SELECT COUNT(*) AS donations FROM donations';
  const totalAmount = 'SELECT SUM(amount) AS totalAmount FROM donations';

  db.query(`${totalUsers}; ${totalDonations}; ${totalAmount}`, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    res.json({
      totalUsers: results[0][0].users,
      totalDonations: results[1][0].donations,
      totalAmount: results[2][0].totalAmount || 0
    });
  });
};
