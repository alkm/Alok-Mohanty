-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 29, 2013 at 06:38 AM
-- Server version: 5.5.32
-- PHP Version: 5.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `myworld`
--
CREATE DATABASE IF NOT EXISTS `myworld` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `myworld`;

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE IF NOT EXISTS `messages` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` char(255) CHARACTER SET utf8 NOT NULL,
  `text` text CHARACTER SET utf8,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `name`, `text`) VALUES
(1, 'Guest', 'jhghj'),
(2, 'Alok', 'woah'),
(3, 'Alok', 'hi'),
(4, 'alok', 'hey'),
(5, 'Guest', 't'),
(6, 'Alok', 'not eure'),
(7, 'Guest', 'hi');

-- --------------------------------------------------------

--
-- Table structure for table `registration_table`
--

CREATE TABLE IF NOT EXISTS `registration_table` (
  `id` int(9) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=43 ;

--
-- Dumping data for table `registration_table`
--

INSERT INTO `registration_table` (`id`, `firstname`, `lastname`, `gender`, `email`, `password`) VALUES
(24, 'Alok', 'Mohanty', 'male', 'alokmohanty@myworld.com', 'hn4y6nas'),
(31, 'Amit', 'Mohanty', 'male', 'amitmohanty@myworld.com', 'hn4y6nas'),
(32, 'Abhijit', 'Mallick', 'male', 'abhijitmallick@myworld.com', 'myworld'),
(33, 'Debasmita', 'sahu', 'female', 'debasmitasahu@myworld.com', 'myworld'),
(34, 'Sidharth', 'ratha', 'male', 'sidhartharatha@myworld.com', 'myworld'),
(35, 'tapaswi', 'panda', 'male', 'tapaswipanda@myworld.com', 'myworld'),
(36, 'Adam', 'Andserson', 'male', 'adam@myworld.com', 'myworld'),
(37, 'neo', 'anderson', 'male', 'neo@myworld.com', 'myworld'),
(38, 'sam', 'anderson', 'male', 'sam@myworld.com', 'myworld'),
(39, 'nick', 'anderson', 'male', 'nick@myworld.com', 'myworld'),
(40, 'neil', 'anderson', 'male', 'neil@myworld.com', 'myworld'),
(41, 'William', 'conor', 'male', 'william@myworld.com', 'myworld'),
(42, 'Kem', 'conor', 'male', 'kem@myworld.com', 'myworld');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
