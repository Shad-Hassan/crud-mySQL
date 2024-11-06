const db = require("../config/db");
const newsQueries = require("../queries/newsQueries");

const getAllNews = () => {
  return new Promise((resolve, reject) => {
    db.query(newsQueries.getAllNews, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = {
  getAllNews,
};
