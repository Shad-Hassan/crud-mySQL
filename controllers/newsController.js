const db = require('../config/db');
const newsQueries = require('../queries/newsQueries');

const executeQuery = (query, params) => {
  return new Promise((resolve, reject) => {
    db.query(query, params, (err, result) => {
      if (err) {
        reject({ statusCode: 500, message: 'Error fetching news' });
      }
      resolve(result);
    });
  });
};

const getAllNews = async (req, res) => {
  try {
    const results = await executeQuery(newsQueries.getAllNews);

    if (results.length === 0) {
      return res.status(404).json({ message: 'No news available' });
    }

    res.json(results);
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message || 'An error occurred' });
  }
};

module.exports = { getAllNews };
