const db = require('../config/db');
const postQueries = require('../queries/postQueries');

const executeQuery = (query, params) => {
  return new Promise((resolve, reject) => {
    db.query(query, params, (err, result) => {
      if (err) {
        console.error("Query Error:", err);  // Debugging log
        return reject({ statusCode: 500, message: 'Error executing query' });
      }
      resolve(result);
    });
  });
};

const insertNewsData = async (req, res) => {
  // Log the incoming request body to verify the data being passed
  console.log("Request body:", req.body);

  const {
    language, date, title, news_card_img, full_article,
    youtubeUrl1, youtubeUrl2, youtubeUrl3,
    image1, image2, image3, image4, image5, image6, image7, image8,
    meta_description, meta_keywords, meta_canonical_url, meta_category,
    meta_title, og_title, og_description, og_url, og_type,
    twitter_title, twitter_description, twitter_card
  } = req.body;

  const images = [image1, image2, image3, image4, image5, image6, image7, image8];
  const youtubeUrls = [youtubeUrl1, youtubeUrl2, youtubeUrl3];
  const seoData = [
    meta_description, meta_keywords, meta_canonical_url, meta_category, meta_title,
    og_title, og_description, og_url, og_type, twitter_title, twitter_description, twitter_card
  ];

  db.beginTransaction(async (err) => {
    if (err) {
      console.error("Transaction Error:", err);
      return res.status(500).json({ message: 'Transaction Start Failed' });
    }

    try {
      // Check for duplicates
      const existingNews = await executeQuery(postQueries.checkDuplicateNewsQuery, [language, date, title, news_card_img]);
      if (existingNews.length > 0) {
        return res.status(409).json({ message: 'Duplicate entry detected.' });
      }

      // Insert data into `news_api` and retrieve `insertId`
      const newsApiResult = await executeQuery(postQueries.insertIntoNewsApi, [language, date, title, news_card_img]);
      const newsApiId = newsApiResult.insertId;

      if (!newsApiId) {
        throw { statusCode: 500, message: 'Failed to retrieve insertId for newsApi' };
      }

      // Insert full article, YouTube URLs, and other data
      await executeQuery(postQueries.insertIntoNewsArticle, [newsApiId, full_article, ...youtubeUrls]);
      await executeQuery(postQueries.insertIntoNewsGallery, [newsApiId, ...images]);
      await executeQuery(postQueries.insertIntoNewsSeo, [newsApiId, ...seoData]);

      // Commit transaction
      db.commit((commitErr) => {
        if (commitErr) {
          console.error("Commit Error:", commitErr);
          return db.rollback(() => {
            return res.status(500).json({ message: 'Error committing transaction' });
          });
        }
        res.status(201).json({ message: "News Posted successfully" });
      });

    } catch (err) {
      console.error("Transaction Rollback Error:", err);
      db.rollback(() => {
        return res.status(err.statusCode || 500).json({ message: err.message || 'An error occurred during the transaction' });
      });
    }
  });
};


const insertMessage = async (req, res) => {

  const { fullname, phone, email, message, date } = req.body;
  
  try {
    const duplicateCheck = await new Promise((resolve, reject) => {
      db.query(postQueries.checkDuplicateMessage, [fullname, phone, email, date], (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });

    if (duplicateCheck.length > 0) {
      return res.status(409).json({ message: 'Duplicate entry detected for today' });
    }

    await new Promise((resolve, reject) => {
      db.query(postQueries.insertMessage, [fullname, phone, email, message, date], (err, result) => {
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
