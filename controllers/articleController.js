const db = require('../config/db');
const articleQueries = require('../queries/articleQueries');

const getArticleById = (req, res) => {
    const { id } = req.params;
    
    if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid article ID" });
    }

    const query = articleQueries.getArticleById(id);

    db.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ message: "Error fetching article", error: err.message });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: "Article not found" });
        }

        // Send the results
        res.json(results[0]); // Send the first result as the article object
    });
};

module.exports = {
    getArticleById
};
