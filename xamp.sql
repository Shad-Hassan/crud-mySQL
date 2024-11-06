-- Table: news_api
CREATE TABLE news_api (
    id INT AUTO_INCREMENT PRIMARY KEY,      -- Auto-increment integer ID
    language VARCHAR(255),                  -- Language of the content
    date DATETIME,                          -- Date of the news item
    title TEXT,                             -- Title of the news item
    news_card_img TEXT                      -- Background image path or URL
);

-- Table: news_details
CREATE TABLE news_article (
    article_id INT NOT NULL UNIQUE,                               -- Same ID as in news_api to maintain consistency
    full_article TEXT,                                            -- Full paragraph of the news article
    youtubeUrl1 TEXT,                                             -- URL of an embedded YouTube video if available
    youtubeUrl2 TEXT,                                             -- URL of an embedded YouTube video if available
    youtubeUrl3 TEXT,                                             -- URL of an embedded YouTube video if available
    FOREIGN KEY (_id) REFERENCES news_api(_id) ON DELETE CASCADE  -- Foreign key relationship
);

-- Table: news_gallery
CREATE TABLE news_gallery (
    _id INT NOT NULL UNIQUE,            -- Matches news_api._id
    image1 TEXT,                        -- URL of additional images
    image2 TEXT,
    image3 TEXT,
    image4 TEXT,
    image5 TEXT,
    image6 TEXT,
    image7 TEXT,
    image8 TEXT,
    FOREIGN KEY (_id) REFERENCES news_api(_id) ON DELETE CASCADE  -- Foreign key relationship
);

-- Table: news_seo
CREATE TABLE news_seo (
    _id INT NOT NULL UNIQUE,                     -- Same ID as in news_api
    meta_description TEXT,                       -- Meta description for SEO
    meta_keywords TEXT,                          -- Keywords for SEO
    meta_canonical_url TEXT,                     -- Canonical URL for SEO
    meta_category TEXT,                          -- Meta category for SEO
    meta_title TEXT,                             -- Meta title for SEO
    og_title TEXT,                               -- Open Graph title
    og_description TEXT,                         -- Open Graph description
    og_image TEXT,                               -- Open Graph image (same as news_card_img)
    og_url TEXT,                                 -- Open Graph URL
    og_type TEXT,                                -- Open Graph type (usually "article")
    twitter_title TEXT,                          -- Twitter Card title
    twitter_description TEXT,                    -- Twitter Card description
    twitter_image TEXT,                          -- Twitter Card image
    twitter_card TEXT,                           -- Twitter Card type (summary_large_image)
    FOREIGN KEY (_id) REFERENCES news_api(_id) ON DELETE CASCADE  -- Foreign key relationship
);
