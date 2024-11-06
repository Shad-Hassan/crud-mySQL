const articleQueries = require('../queries/articleQueries'); 
const db = require('../config/db'); 
const ErrorHandler = require('../errors/ErrorHandler'); 

const getArticleById = async (req, res, next) => {
  const { id } = req.params;

  try {
    
    if (isNaN(id)) {
      throw ErrorHandler.badRequest("Invalid article ID");
    }

    const query = articleQueries.getArticleById(id);

    db.query(query, [id], (err, results) => {
      if (err) {
        return next(ErrorHandler.serverError("Error fetching article", err));
      }

      if (results.length === 0) {
        throw ErrorHandler.notFound("Article not found");
      }

      res.json(results[0]); 
    });
  } catch (error) {
    next(error); 
  }
};

module.exports = {
  getArticleById
};
