const db = require('../config/db');
const postQueries = require('../queries/postQueries');
const ErrorHandler = require('../errors/ErrorHandler');

const insertNewsData = async (req, res, next) => {
    const {
        language, date, title, news_card_img,
        full_article, youtubeUrl1, youtubeUrl2, youtubeUrl3,
        image1, image2, image3, image4, image5, image6, image7, image8,
        meta_description, meta_keywords, meta_canonical_url, meta_category,
        meta_title, og_title, og_description, og_url, og_type,
        twitter_title, twitter_description, twitter_card
    } = req.body;

    const connection = await db.getConnection();

    try {
        await connection.beginTransaction();

        const [existingNews] = await connection.execute(
            postQueries.checkDuplicateNewsQuery,
            [language, date, title, news_card_img]
        );

        if (existingNews.length > 0) {
            return next(new ErrorHandler('Duplicate entry detected.', 409));
        }

        const [result] = await connection.execute(
            postQueries.insertIntoNewsApi,
            [language, date, title, news_card_img]
        );

        const newsApiId = result.insertId;

        await connection.execute(
            postQueries.insertIntoNewsArticle,
            [newsApiId, full_article, youtubeUrl1, youtubeUrl2, youtubeUrl3]
        );

        await connection.execute(
            postQueries.insertIntoNewsGallery,
            [newsApiId, image1, image2, image3, image4, image5, image6, image7, image8]
        );

        await connection.execute(
            postQueries.insertIntoNewsSeo,
            [newsApiId, meta_description, meta_keywords, meta_canonical_url, meta_category, meta_title, 
             og_title, og_description, og_url, og_type, twitter_title, twitter_description, twitter_card]
        );

        await connection.commit();

        res.status(201).json({ message: "News Posted successfully" });

    } catch (error) {
        await connection.rollback();
        next(error); 
    } finally {
        connection.release();
    }
};

module.exports = { insertNewsData };
