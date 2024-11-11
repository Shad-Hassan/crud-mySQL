const db = require('../config/db');
const postQueries = require('../queries/postQueries');

const executeQuery = (query, params) => {
  return new Promise((resolve, reject) => {
    db.query(query, params, (err, result) => {
      if (err) {
        reject({ statusCode: 500, message: 'Error executing query' });
      }
      resolve(result);
    });
  });
};

const isValidMySQLDate = (dateString) => {
  const regex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
  return regex.test(dateString);
};

const parseDate = (dateString) => {
  if (isValidMySQLDate(dateString)) return dateString;
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return null;
  return date.toISOString().slice(0, 19).replace('T', ' ');
};

const insertNewsData = async (req, res) => {
  const {
    language, date, title, news_card_img,
    full_article, youtubeUrl1, youtubeUrl2, youtubeUrl3,
    image1, image2, image3, image4, image5, image6, image7, image8,
    meta_description, meta_keywords, meta_canonical_url, meta_category,
    meta_title, og_title, og_description, og_url, og_type,
    twitter_title, twitter_description, twitter_card
  } = req.body;

  const formattedDate = parseDate(date) || date;

  const images = [image1, image2, image3, image4, image5, image6, image7, image8];
  const youtubeUrls = [youtubeUrl1, youtubeUrl2, youtubeUrl3];
  const seoData = [
    meta_description, meta_keywords, meta_canonical_url, meta_category, meta_title,
    og_title, og_description, og_url, og_type, twitter_title, twitter_description, twitter_card
  ];

  db.beginTransaction(async (err) => {
    if (err) {
      return res.status(500).json({ message: 'Transaction Start Failed' });
    }

    try {
      const existingNews = await executeQuery(postQueries.checkDuplicateNewsQuery, [language, formattedDate, title, news_card_img]);

      if (existingNews.length > 0) {
        return res.status(409).json({ message: 'Duplicate entry detected.' });
      }

      const newsApiId = await executeQuery(postQueries.insertIntoNewsApi, [language, formattedDate, title, news_card_img])
        .then(result => result.insertId);

      await executeQuery(postQueries.insertIntoNewsArticle, [newsApiId, full_article, ...youtubeUrls]);
      await executeQuery(postQueries.insertIntoNewsGallery, [newsApiId, ...images]);
      await executeQuery(postQueries.insertIntoNewsSeo, [newsApiId, ...seoData]);

      db.commit((err) => {
        if (err) {
          return db.rollback(() => {
            return res.status(500).json({ message: 'Error committing transaction' });
          });
        }
        res.status(201).json({ message: "News Posted successfully" });
      });

    } catch (err) {
      db.rollback(() => {
        return res.status(err.statusCode || 500).json({ message: err.message || 'An error occurred during the transaction' });
      });
    }
  });
};

module.exports = { insertNewsData };
