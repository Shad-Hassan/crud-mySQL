const db = require('../config/db');
const articleQueries = require('../queries/articleQueries');

const getArticleById = async (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid article ID" });
  }

  const query = articleQueries.getArticleById;

  try {
    db.query(query, [id], (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Error fetching article', error: err.message });
      }

      if (results.length === 0) {
        return res.status(404).json({ message: 'Article not found' });
      }

      res.json(results[0]); 
    });
  } catch (error) {
    res.status(500).json({ message: error.message || 'An error occurred' });
  }
};

module.exports = {
  getArticleById
};
