// queries/articleQueries.js


const articleQueries = {
    getArticleById: `
        SELECT 
    news_api.id AS news_id, 
    news_api.language, 
    news_api.date, 
    news_api.title, 
    news_api.news_card_img,
    news_article.full_article,
    news_article.youtubeUrl1,
    news_article.youtubeUrl2,
    news_article.youtubeUrl3,
    news_gallery.image1,
    news_gallery.image2,
    news_gallery.image3,
    news_gallery.image4,
    news_gallery.image5,
    news_gallery.image6,
    news_gallery.image7,
    news_gallery.image8,
    news_seo.meta_description,
    news_seo.meta_keywords,
    news_seo.meta_canonical_url,
    news_seo.meta_category,
    news_seo.meta_title,
    news_seo.og_title,
    news_seo.og_description,
    news_seo.og_url,
    news_seo.og_type,
    news_seo.twitter_title,
    news_seo.twitter_description,
    news_seo.twitter_card
FROM news_api
LEFT JOIN news_article ON news_api.id = news_article.id
LEFT JOIN news_gallery ON news_api.id = news_gallery.id
LEFT JOIN news_seo ON news_api.id = news_seo.id
WHERE news_api.id = ?

      `,
}
module.exports = articleQueries;
