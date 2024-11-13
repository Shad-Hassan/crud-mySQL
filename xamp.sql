-- Table: news_api
CREATE TABLE news_api (
    id INT AUTO_INCREMENT PRIMARY KEY,      -- Auto-increment integer ID
    language TEXT,                  -- Language of the content
    date TIMESTAMP,                         -- Timestamp of the news item (can be updated manually)
    title TEXT,                             -- Title of the news item
    news_card_img TEXT                      -- Background image path or URL
);

-- Table: news_article
CREATE TABLE news_article (
    id INT NOT NULL,                         -- Foreign key reference to news_api.id
    full_article TEXT,                       -- Full paragraph of the news article
    youtubeUrl1 TEXT,                        -- URL of an embedded YouTube video if available
    youtubeUrl2 TEXT,                        -- URL of an embedded YouTube video if available
    youtubeUrl3 TEXT,                        -- URL of an embedded YouTube video if available
    FOREIGN KEY (id) REFERENCES news_api(id) ON DELETE CASCADE  -- Foreign key reference to news_api.id
);

-- Table: news_gallery
CREATE TABLE news_gallery (
    id INT NOT NULL,                         -- Foreign key reference to news_api.id
    image1 TEXT,                             -- URL of additional images
    image2 TEXT,
    image3 TEXT,
    image4 TEXT,
    image5 TEXT,
    image6 TEXT,
    image7 TEXT,
    image8 TEXT,
    FOREIGN KEY (id) REFERENCES news_api(id) ON DELETE CASCADE  -- Foreign key reference to news_api.id
);

-- Table: news_seo
CREATE TABLE news_seo (
    id INT NOT NULL,                         -- Foreign key reference to news_api.id
    meta_description TEXT,                   -- Meta description for SEO
    meta_keywords TEXT,                      -- Keywords for SEO
    meta_canonical_url TEXT,                 -- Canonical URL for SEO
    meta_category TEXT,                      -- Meta category for SEO
    meta_title TEXT,                         -- Meta title for SEO
    og_title TEXT,                           -- Open Graph title
    og_description TEXT,                     -- Open Graph description
    og_url TEXT,                             -- Open Graph URL
    og_type TEXT,                            -- Open Graph type (usually "article")
    twitter_title TEXT,                      -- Twitter Card title
    twitter_description TEXT,                -- Twitter Card description
    twitter_card TEXT,                       -- Twitter Card type (summary_large_image)
    FOREIGN KEY (id) REFERENCES news_api(id) ON DELETE CASCADE  -- Foreign key reference to news_api.id
);

CREATE TABLE message_api (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullname TEXT NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    date DATETIME NOT NULL,
    
    INDEX idx_fullname_phone_email_date (fullname, phone, email, date)
);


CREATE TABLE subscriber_api (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email TEXT NOT NULL
);
