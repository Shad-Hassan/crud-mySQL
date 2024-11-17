-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 17, 2024 at 07:40 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `krishibid_xamp`
--

-- --------------------------------------------------------

--
-- Table structure for table `message_api`
--

CREATE TABLE `message_api` (
  `id` int(11) NOT NULL,
  `fullname` text NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` text NOT NULL,
  `message` text NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `message_api`
--

INSERT INTO `message_api` (`id`, `fullname`, `phone`, `email`, `message`, `date`) VALUES
(1, 'John Doe', '+1234567890', 'johndoe@example.com', 'I have an inquiry about your services.', '2024-11-12 15:30:00'),
(2, 'Jane Smith', '+1987654321', 'janesmith@example.com', 'Can you provide more details about the pricing?', '2024-11-12 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `news_api`
--

CREATE TABLE `news_api` (
  `id` int(11) NOT NULL,
  `language` varchar(255) DEFAULT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `title` text DEFAULT NULL,
  `news_card_img` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `news_api`
--

INSERT INTO `news_api` (`id`, `language`, `date`, `title`, `news_card_img`) VALUES
(2, NULL, '2024-11-13 04:37:51', NULL, NULL),
(3, NULL, '2024-11-13 04:41:08', NULL, NULL),
(4, NULL, '2024-11-13 04:48:03', NULL, NULL),
(5, NULL, '2024-11-13 04:54:06', NULL, NULL),
(6, 'English', '2024-11-12 22:50:07', 'Dr. Ali Afzal: Agriculture Commission Needed for Affordability', '/uploads/image-1730266290422-846470533.webp'),
(7, NULL, '2024-11-13 04:59:25', NULL, NULL),
(8, NULL, '2024-11-13 05:00:47', NULL, NULL),
(9, NULL, '2024-11-13 05:06:35', NULL, NULL),
(10, NULL, '2024-11-13 05:12:07', NULL, NULL),
(11, NULL, '2024-11-13 05:12:32', NULL, NULL),
(12, NULL, '2024-11-13 05:16:32', NULL, NULL),
(13, 'English', '2024-11-12 22:50:07', 'Dr. Ali Azertoh: Agriculture Commission Needed for Affordability', '/uploads/image-1730266290422-846470533.webp'),
(14, 'English', '2024-10-20 02:24:00', 'Dr. Ali Afzal: Agriculture Commission Needed for Affordability', '/uploads/image-1730266290422-846470533.webp'),
(15, 'English', '2024-11-06 05:26:00', 'Dr. Ali AZinoth GURBASHI: Agriculture Commission Needed for Affordability', '/uploads/image-1730266290422-846470533.webp'),
(16, 'English', '2024-11-06 05:26:00', 'ZUL GURUB: Agriculture Commission Needed for Affordability', '/uploads/image-1730266290422-846470533.webp'),
(17, 'English', '2024-11-06 05:26:00', 'AZINOTH ZEHOVA ZUL GURUB: Agriculture Commission Needed for Affordability', '/uploads/image-1730266290422-846470533.webp'),
(18, 'English', '2024-11-06 05:26:00', 'Leura AZINOTH ZEHOVA ZUL GURUB: Agriculture Commission Needed for Affordability', '/uploads/image-1730266290422-846470533.webp'),
(19, 'English', '2025-11-14 05:59:00', 'Leura AZINOTH ZEHOVA ZUL GURUB: Agriculture Commission Needed for Affordability', '/uploads/image-1730266290422-846470533.webp');

-- --------------------------------------------------------

--
-- Table structure for table `news_article`
--

CREATE TABLE `news_article` (
  `id` int(11) NOT NULL,
  `full_article` text DEFAULT NULL,
  `youtubeUrl1` text DEFAULT NULL,
  `youtubeUrl2` text DEFAULT NULL,
  `youtubeUrl3` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `news_article`
--

INSERT INTO `news_article` (`id`, `full_article`, `youtubeUrl1`, `youtubeUrl2`, `youtubeUrl3`) VALUES
(2, NULL, NULL, NULL, NULL),
(3, NULL, NULL, NULL, NULL),
(4, NULL, NULL, NULL, NULL),
(5, NULL, NULL, NULL, NULL),
(6, 'Dr. Ali Afzal delivered an insightful interview on Biztalk, aired by ATN News. The host opened the discussion by highlighting the vital role of agriculture in Bangladesh, alongside the technological advancements and improved crop yields over the past five decades. As a guest speaker, Dr. Afzal was first asked how agricultural practices in Bangladesh could be enhanced to align with global standards. He began by sharing population statistics, noting significant growth over five decades and projecting a population of 1.45 billion by 2100. He contrasted this growth with the decreasing availability of land, affected by erosion and other geographical challenges. Dr. Afzal acknowledged Bangladesh\'s achievement in boosting food production to 40 million metric tons but noted a gap between this level and the claim of self-sufficiency, as the country remains reliant on imports. Compared to Western nations, he emphasized that Bangladesh continues to lag in agricultural development. Drawing from his experience as a scientist, Dr. Afzal attributed these challenges to flawed policies and a lack of integrity in research practices, despite substantial resources allocated to agriculture. He stressed that research should prioritize transparency and real-world applicability rather than academic pressures to publish and seek promotion. He also underscored that, despite Bangladesh\'s agrarian foundation and farming’s 11% contribution to GDP, concern is growing over the continued neglect of the farming community. In light of the political shifts of 2024, Dr. Afzal warned that further disregard for this vital sector could lead to significant unrest and destabilization. Farmers form a crucial backbone of the country, with one in every six people directly reliant on their work; he cautioned that their discontent could spark disruption with serious implications for national stability. Dr. Afzal further remarked that it is unfortunate agriculture has not been established as a separate commission, having outgrown its role as a business subset. Given its vast scale and critical importance to both the economy and national nutrition, agriculture warrants a dedicated commission. Establishing a properly designated body focused solely on agriculture and agronomy, he argued, is essential and without alternative.', 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fkrishibidgroup%2Fvideos%2F583853910649244%2F&show_text=false&width=560&t=0', '', ''),
(7, NULL, NULL, NULL, NULL),
(8, NULL, NULL, NULL, NULL),
(9, NULL, NULL, NULL, NULL),
(10, NULL, NULL, NULL, NULL),
(11, NULL, NULL, NULL, NULL),
(12, NULL, NULL, NULL, NULL),
(13, 'Dr. Ali Afzal delivered an insightful interview on Biztalk, aired by ATN News. The host opened the discussion by highlighting the vital role of agriculture in Bangladesh, alongside the technological advancements and improved crop yields over the past five decades. As a guest speaker, Dr. Afzal was first asked how agricultural practices in Bangladesh could be enhanced to align with global standards. He began by sharing population statistics, noting significant growth over five decades and projecting a population of 1.45 billion by 2100. He contrasted this growth with the decreasing availability of land, affected by erosion and other geographical challenges. Dr. Afzal acknowledged Bangladesh\'s achievement in boosting food production to 40 million metric tons but noted a gap between this level and the claim of self-sufficiency, as the country remains reliant on imports. Compared to Western nations, he emphasized that Bangladesh continues to lag in agricultural development. Drawing from his experience as a scientist, Dr. Afzal attributed these challenges to flawed policies and a lack of integrity in research practices, despite substantial resources allocated to agriculture. He stressed that research should prioritize transparency and real-world applicability rather than academic pressures to publish and seek promotion. He also underscored that, despite Bangladesh\'s agrarian foundation and farming’s 11% contribution to GDP, concern is growing over the continued neglect of the farming community. In light of the political shifts of 2024, Dr. Afzal warned that further disregard for this vital sector could lead to significant unrest and destabilization. Farmers form a crucial backbone of the country, with one in every six people directly reliant on their work; he cautioned that their discontent could spark disruption with serious implications for national stability. Dr. Afzal further remarked that it is unfortunate agriculture has not been established as a separate commission, having outgrown its role as a business subset. Given its vast scale and critical importance to both the economy and national nutrition, agriculture warrants a dedicated commission. Establishing a properly designated body focused solely on agriculture and agronomy, he argued, is essential and without alternative.', 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fkrishibidgroup%2Fvideos%2F583853910649244%2F&show_text=false&width=560&t=0', '', ''),
(14, NULL, 'www.youtube.com', '', ''),
(15, NULL, 'www.youtube.com', '', ''),
(16, NULL, 'www.youtube.com', '', ''),
(17, NULL, 'www.youtube.com', '', ''),
(18, NULL, 'www.youtube.com', '', ''),
(19, NULL, 'www.youtube.com', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `news_gallery`
--

CREATE TABLE `news_gallery` (
  `id` int(11) NOT NULL,
  `image1` text DEFAULT NULL,
  `image2` text DEFAULT NULL,
  `image3` text DEFAULT NULL,
  `image4` text DEFAULT NULL,
  `image5` text DEFAULT NULL,
  `image6` text DEFAULT NULL,
  `image7` text DEFAULT NULL,
  `image8` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `news_gallery`
--

INSERT INTO `news_gallery` (`id`, `image1`, `image2`, `image3`, `image4`, `image5`, `image6`, `image7`, `image8`) VALUES
(2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(5, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(6, '/uploads/image-1730266247195-919618431.webp', '/uploads/image-1730266282045-283179386.webp', '/uploads/image-1730266135069-494308145.webp', '', '', '', '', ''),
(7, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(8, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(9, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(10, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(11, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(12, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(13, '/uploads/image-1730266247195-919618431.webp', '/uploads/image-1730266282045-283179386.webp', '/uploads/image-1730266135069-494308145.webp', '', '', '', '', ''),
(14, '/uploads/image-1730266247195-919618431.webp', '/uploads/image-1730266282045-283179386.webp', '/uploads/image-1730266135069-494308145.webp', '', '', '', '', ''),
(15, '/uploads/image-1730266247195-919618431.webp', '/uploads/image-1730266282045-283179386.webp', '/uploads/image-1730266135069-494308145.webp', '', '', '', '', ''),
(16, '/uploads/image-1730266247195-919618431.webp', '/uploads/image-1730266282045-283179386.webp', '/uploads/image-1730266135069-494308145.webp', '', '', '', '', ''),
(17, '/uploads/image-1730266247195-919618431.webp', '/uploads/image-1730266282045-283179386.webp', '/uploads/image-1730266135069-494308145.webp', '', '', '', '', ''),
(18, '/uploads/image-1730266247195-919618431.webp', '/uploads/image-1730266282045-283179386.webp', '/uploads/image-1730266135069-494308145.webp', '', '', '', '', ''),
(19, '/uploads/image-1730266247195-919618431.webp', '/uploads/image-1730266282045-283179386.webp', '/uploads/image-1730266135069-494308145.webp', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `news_seo`
--

CREATE TABLE `news_seo` (
  `id` int(11) NOT NULL,
  `meta_description` text DEFAULT NULL,
  `meta_keywords` text DEFAULT NULL,
  `meta_canonical_url` text DEFAULT NULL,
  `meta_category` text DEFAULT NULL,
  `meta_title` text DEFAULT NULL,
  `og_title` text DEFAULT NULL,
  `og_description` text DEFAULT NULL,
  `og_url` text DEFAULT NULL,
  `og_type` text DEFAULT NULL,
  `twitter_title` text DEFAULT NULL,
  `twitter_description` text DEFAULT NULL,
  `twitter_card` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `news_seo`
--

INSERT INTO `news_seo` (`id`, `meta_description`, `meta_keywords`, `meta_canonical_url`, `meta_category`, `meta_title`, `og_title`, `og_description`, `og_url`, `og_type`, `twitter_title`, `twitter_description`, `twitter_card`) VALUES
(2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(5, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(6, 'Dr. Ali Afzal discusses the need for an Agriculture Commission in Bangladesh, highlighting the country\'s agricultural challenges, self-sufficiency in food production, and the importance of research integrity.', 'Agriculture Commission, Bangladesh agriculture, Dr. Ali Afzal, crop yields, food production, agricultural policies, agriculture research, self-sufficiency Bangladesh, agrarian economy', 'http://example.com/dr-ali-afzal-agriculture-commission', 'Agriculture', 'Dr. Ali Afzal: Agriculture Commission Needed for Affordability', 'Dr. Ali Afzal: Agriculture Commission Needed for Affordability', 'Dr. Ali Afzal discusses the pressing need for an Agriculture Commission in Bangladesh to address challenges in the country\'s agricultural sector.', 'http://example.com/dr-ali-afzal-agriculture-commission', 'article', 'Dr. Ali Afzal: Agriculture Commission Needed for Affordability', 'Dr. Ali Afzal highlights the challenges and the need for an Agriculture Commission in Bangladesh to strengthen the country\'s agricultural sector.', 'summary_large_image'),
(7, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(8, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(9, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(10, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(11, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(12, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(13, 'Dr. Ali Afzal discusses the need for an Agriculture Commission in Bangladesh, highlighting the country\'s agricultural challenges, self-sufficiency in food production, and the importance of research integrity.', 'Agriculture Commission, Bangladesh agriculture, Dr. Ali Afzal, crop yields, food production, agricultural policies, agriculture research, self-sufficiency Bangladesh, agrarian economy', 'http://example.com/dr-ali-afzal-agriculture-commission', 'Agriculture', 'Dr. Ali Afzal: Agriculture Commission Needed for Affordability', 'Dr. Ali Afzal: Agriculture Commission Needed for Affordability', 'Dr. Ali Afzal discusses the pressing need for an Agriculture Commission in Bangladesh to address challenges in the country\'s agricultural sector.', 'http://example.com/dr-ali-afzal-agriculture-commission', 'article', 'Dr. Ali Afzal: Agriculture Commission Needed for Affordability', 'Dr. Ali Afzal highlights the challenges and the need for an Agriculture Commission in Bangladesh to strengthen the country\'s agricultural sector.', 'summary_large_image'),
(14, '', '', '', '', '', '', '', '', '', '', '', ''),
(15, '', '', '', '', '', '', '', '', '', '', '', ''),
(16, '', '', '', '', '', '', '', '', '', '', '', ''),
(17, '', '', '', '', '', '', '', '', '', '', '', ''),
(18, '', '', '', '', '', '', '', '', '', '', '', ''),
(19, '', '', '', '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `subscriber_api`
--

CREATE TABLE `subscriber_api` (
  `id` int(11) NOT NULL,
  `email` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `subscriber_api`
--

INSERT INTO `subscriber_api` (`id`, `email`) VALUES
(1, 'newsubscriber@example.com'),
(2, 'newsubscriber2@example.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `message_api`
--
ALTER TABLE `message_api`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_fullname_phone_email_date` (`fullname`(255),`phone`,`email`(255),`date`);

--
-- Indexes for table `news_api`
--
ALTER TABLE `news_api`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news_article`
--
ALTER TABLE `news_article`
  ADD KEY `id` (`id`);

--
-- Indexes for table `news_gallery`
--
ALTER TABLE `news_gallery`
  ADD KEY `id` (`id`);

--
-- Indexes for table `news_seo`
--
ALTER TABLE `news_seo`
  ADD KEY `id` (`id`);

--
-- Indexes for table `subscriber_api`
--
ALTER TABLE `subscriber_api`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `message_api`
--
ALTER TABLE `message_api`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `news_api`
--
ALTER TABLE `news_api`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `subscriber_api`
--
ALTER TABLE `subscriber_api`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `news_article`
--
ALTER TABLE `news_article`
  ADD CONSTRAINT `news_article_ibfk_1` FOREIGN KEY (`id`) REFERENCES `news_api` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `news_gallery`
--
ALTER TABLE `news_gallery`
  ADD CONSTRAINT `news_gallery_ibfk_1` FOREIGN KEY (`id`) REFERENCES `news_api` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `news_seo`
--
ALTER TABLE `news_seo`
  ADD CONSTRAINT `news_seo_ibfk_1` FOREIGN KEY (`id`) REFERENCES `news_api` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
