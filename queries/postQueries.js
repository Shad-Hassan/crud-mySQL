const postQueries = {
    checkDuplicateNewsQuery: `
        SELECT id FROM news_api 
        WHERE language = ? AND date = ? AND title = ? AND news_card_img = ?
    `,

    insertIntoNewsApi: `
        INSERT INTO news_api (language, date, title, news_card_img)
        VALUES (?, ?, ?, ?)
    `,

    insertIntoNewsArticle: `
        INSERT INTO news_article (id, full_article, youtubeUrl1, youtubeUrl2, youtubeUrl3)
        VALUES (?, ?, ?, ?, ?)
    `,

    insertIntoNewsGallery: `
        INSERT INTO news_gallery (id, image1, image2, image3, image4, image5, image6, image7, image8)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,

    insertIntoNewsSeo: `
        INSERT INTO news_seo (id, meta_description, meta_keywords, meta_canonical_url, meta_category, meta_title, 
                               og_title, og_description, og_url, og_type, twitter_title, twitter_description, twitter_card)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `
};

module.exports = postQueries;
