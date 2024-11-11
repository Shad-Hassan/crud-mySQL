// queries/articleQueries.js


const articleQueries = {
    getArticleById: `
    SELECT 
    na.id AS news_id, 
    na.language, 
    na.date, 
    na.title, 
    na.news_card_img,
    nart.full_article,
    nart.youtubeUrl1,
    nart.youtubeUrl2,
    nart.youtubeUrl3,
    ng.image1,
    ng.image2,
    ng.image3,
    ng.image4,
    ng.image5,
    ng.image6,
    ng.image7,
    ng.image8,
    ns.meta_description,
    ns.meta_keywords,
    ns.meta_canonical_url,
    ns.meta_category,
    ns.meta_title,
    ns.og_title,
    ns.og_description,
    ns.og_url,
    ns.og_type,
    ns.twitter_title,
    ns.twitter_description,
    ns.twitter_card
FROM (
    SELECT * FROM news_api WHERE id = ? LIMIT 1
) AS na
LEFT JOIN news_article AS nart ON na.id = nart.id
LEFT JOIN news_gallery AS ng ON na.id = ng.id
LEFT JOIN news_seo AS ns ON na.id = ns.id;


      `,
}
module.exports = articleQueries;
