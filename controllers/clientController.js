const db = require('../config/db');
const clientQueries = require('../queries/clientQueries');

const executeQuery = (query, params) => {
  return new Promise((resolve, reject) => {
    db.query(query, params, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

const getAllMessages = async () => {
  try {
    const results = await executeQuery(clientQueries.getAllMessages);
    return results;
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw error;
  }
};

const getAllSubscriber = async () => {
  try {
    const results = await executeQuery(clientQueries.getAllSubscriber);
    return results;
  } catch (error) {
    console.error("Error fetching subscribers:", error);
    throw error;
  }
};

module.exports = { getAllMessages, getAllSubscriber };
