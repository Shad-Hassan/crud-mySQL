const db = require('../config/db');
const postQueries = require('../queries/postQueries');
const ErrorHandler = require('../errors/ErrorHandler');

// Helper function to execute database queries
const executeQuery = async (query, params) => {
    return new Promise((resolve, reject) => {
        db.query(query, params, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};

const checkDuplicateNews = (language, date, title, news_card_img) => {
    return executeQuery(postQueries.checkDuplicateNewsQuery, [language, date, title, news_card_img]);
};

const insertIntoNewsApi = (language, date, title, news_card_img) => {
    return executeQuery(postQueries.insertIntoNewsApi, [language, date, title, news_card_img])
        .then(result => result.insertId);
};

const insertIntoNewsArticle = (newsApiId, full_article, youtubeUrl1, youtubeUrl2, youtubeUrl3) => {
    return executeQuery(postQueries.insertIntoNewsArticle, [newsApiId, full_article, youtubeUrl1, youtubeUrl2, youtubeUrl3]);
};

const insertIntoNewsGallery = (newsApiId, images) => {
    return executeQuery(postQueries.insertIntoNewsGallery, [newsApiId, ...images]);
};

const insertIntoNewsSeo = (newsApiId, seoData) => {
    return executeQuery(postQueries.insertIntoNewsSeo, [newsApiId, ...seoData]);
};

const insertNewsData = async (req, res, next) => {
    const {
        language, date, title, news_card_img,
        full_article, youtubeUrl1, youtubeUrl2, youtubeUrl3,
        image1, image2, image3, image4, image5, image6, image7, image8,
        meta_description, meta_keywords, meta_canonical_url, meta_category,
        meta_title, og_title, og_description, og_url, og_type,
        twitter_title, twitter_description, twitter_card
    } = req.body;

    const images = [image1, image2, image3, image4, image5, image6, image7, image8];
    const seoData = [
        meta_description, meta_keywords, meta_canonical_url, meta_category, meta_title,
        og_title, og_description, og_url, og_type, twitter_title, twitter_description, twitter_card
    ];

    db.beginTransaction(async (err) => {
        if (err) return next(new ErrorHandler('Transaction Start Failed', 500));

        try {
            // Check for duplicate news entry
            const existingNews = await checkDuplicateNews(language, date, title, news_card_img);
            if (existingNews.length > 0) throw new ErrorHandler('Duplicate entry detected.', 409);

            // Insert news data into the database
            const newsApiId = await insertIntoNewsApi(language, date, title, news_card_img);
            await insertIntoNewsArticle(newsApiId, full_article, youtubeUrl1, youtubeUrl2, youtubeUrl3);
            await insertIntoNewsGallery(newsApiId, images);
            await insertIntoNewsSeo(newsApiId, seoData);

            // Commit the transaction if everything is successful
            db.commit((err) => {
                if (err) {
                    return db.rollback(() => {
                        next(new ErrorHandler('Error committing transaction', 500));
                    });
                }
                res.status(201).json({ message: "News Posted successfully" });
            });
        } catch (err) {
            db.rollback(() => {
                if (err instanceof ErrorHandler) {
                    next(err);
                } else {
                    next(new ErrorHandler('An error occurred during the transaction', 500));
                }
            });
        }
    });
};

module.exports = { insertNewsData };
