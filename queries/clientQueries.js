const clientQueries = {
    getAllMessages: `
      SELECT * FROM message_api
    `,
    getAllSubscriber: `
      SELECT * FROM subscriber_api
    `
  };
  
  module.exports = clientQueries;
  