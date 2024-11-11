const db = require('../config/db');
const articleQueries = require('../queries/articleQueries');
const ErrorHandler = require('../errors/ErrorHandler');

const getArticleById = async (req, res, next) => {
    const { id } = req.params;

    if (isNaN(id)) {
        return next(ErrorHandler.badRequest("Invalid article ID"));
    }

    const query = articleQueries.getArticleById(id);

    try {
        const results = await new Promise((resolve, reject) => {
            db.query(query, [id], (err, results) => {
                if (err) return reject(ErrorHandler.internalServerError("Error fetching article", err));
                resolve(results);
            });
        });

        if (results.length === 0) {
            return next(ErrorHandler.notFound("Article not found"));
        }

        res.json(results[0]); // Send the first result as the article object
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getArticleById
};
