const db = require('../config/db');
const articleQueries = require('../queries/articleQueries');

const getArticleById = async (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid article ID" });
  }

  const query = articleQueries.getArticleById(id);

  try {
    const results = await new Promise((resolve, reject) => {
      db.query(query, [id], (err, results) => {
        if (err) return reject({ statusCode: 500, message: 'Error fetching article' });
        resolve(results);
      });
    });

    if (results.length === 0) {
      return res.status(404).json({ message: 'Article not found' });
    }

    res.json(results[0]); 
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message || 'An error occurred' });
  }
};

module.exports = {
  getArticleById
};
