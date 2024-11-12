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

const parseDate = (dateString) => {
  
  const sqlTimestampRegex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;

  // If the string is already in SQL TIMESTAMP format, return it as-is
  if (sqlTimestampRegex.test(dateString)) {
    return dateString;
  }

  // Attempt to parse as ISO 8601 date (e.g., "2024-11-12T16:05")
  const date = new Date(dateString);

  // Validate if parsing was successful
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date format. Provide a valid ISO 8601 or SQL TIMESTAMP date string.");
  }

  // Convert parsed date to SQL TIMESTAMP format: 'YYYY-MM-DD HH:MM:SS'
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-indexed in JS
  const day = String(date.getUTCDate()).padStart(2, '0');
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
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

  const formattedDate = parseDate(date);

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


const insertMessage = async (req, res) => {

  const { fullname, phone, email, message, date } = req.body;
  const formattedDate = parseDate(date);

  try {
    const duplicateCheck = await new Promise((resolve, reject) => {
      db.query(postQueries.checkDuplicateMessage, [fullname, phone, email, formattedDate], (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });

    if (duplicateCheck.length > 0) {
      return res.status(409).json({ message: 'Duplicate entry detected for today' });
    }

    await new Promise((resolve, reject) => {
      db.query(postQueries.insertMessage, [fullname, phone, email, message, formattedDate], (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });

    res.status(201).json({ message: 'Message inserted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error inserting message', error: error.message });
  }
};


const insertSubscriber = async (req, res) => {
  const { email } = req.body; // Extracting email from request body

  try {
    // Check if the email is already in the database
    const duplicateCheck = await new Promise((resolve, reject) => {
      db.query(postQueries.checkDuplicateSubscriber, [email], (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });

    // If the email already exists in the database, return a 400 error
    if (duplicateCheck.length > 0) {
      return res.status(400).json({ message: 'Email is already subscribed' });
    }

    // If no duplicate, insert the email into the database
    await new Promise((resolve, reject) => {
      db.query(postQueries.insertEmail, [email], (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });

    // Respond with success message if subscriber was added
    res.status(201).json({ message: 'Subscriber added successfully' });
  } catch (error) {
    // Handle any errors that occurred during the process
    console.error("Error inserting subscriber:", error);
    res.status(500).json({ message: 'Error inserting subscriber', error: error.message });
  }
};




module.exports = { insertNewsData, insertMessage, insertSubscriber };
