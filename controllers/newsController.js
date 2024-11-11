const db = require('../config/db');
const newsQueries = require('../queries/newsQueries');
const ErrorHandler = require('../errors/ErrorHandler');

const getAllNews = async (req, res, next) => {
  try {
    const results = await new Promise((resolve, reject) => {
      db.query(newsQueries.getAllNews, (err, results) => {
        if (err) return reject(ErrorHandler.internalServerError("Error fetching news", err));
        resolve(results);
      });
    });

    if (results.length === 0) {
      return next(ErrorHandler.notFound("No news available"));
    }

    res.json(results);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllNews,
};
