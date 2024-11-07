const newsQueries = require('../queries/newsQueries');
const db = require('../config/db');
const ErrorHandler = require('../errors/ErrorHandler');

const getAllNews = async (req, res, next) => {
  try {
    db.query(newsQueries.getAllNews, (err, results) => {
      if (err) {
        return next(ErrorHandler.serverError("Error fetching news", err));
      }

      if (results.length === 0) {
        throw ErrorHandler.notFound("No news available");
      }

      res.json(results);
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllNews,
};
