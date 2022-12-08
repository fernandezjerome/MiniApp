-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 08, 2022 at 02:42 AM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_mini`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cars`
--

CREATE TABLE `tbl_cars` (
  `cars_id` smallint(5) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `car_fullname` varchar(50) NOT NULL,
  `price` varchar(20) NOT NULL,
  `lease` varchar(20) NOT NULL,
  `lease_monthly` varchar(20) NOT NULL,
  `finace` varchar(20) NOT NULL,
  `finance_monthly` varchar(20) NOT NULL,
  `id` varchar(50) NOT NULL,
  `lbBG` varchar(100) NOT NULL,
  `biopic` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_cars`
--

INSERT INTO `tbl_cars` (`cars_id`, `name`, `car_fullname`, `price`, `lease`, `lease_monthly`, `finace`, `finance_monthly`, `id`, `lbBG`, `biopic`) VALUES
(1, 'Cooper', '2023 Mini Cooper 3 door', '$27,456', '5.99%', '$385', '3.99%', '$492', 'Cooper', 'Cap_LB_Bg.png', 'cooper.png'),
(2, 'Cooper S', '2023 Mini Cooper S 3 Door', '$29,456', '6.99%', '$444', '4.99%', '$492', 'Cooper S', 'Capcars_LB_Bg.png', 'cooper-s.png'),
(3, 'John Works', '2023 John Cooper Works Convertible', '$31,456', '5.99%', '$542', '5.99%', '$703', 'John Works', 'Capcars_LB_Bg.png', 'cooper-works.png'),
(4, 'John Se 3 Doors', '2023 Mini Cooper SE 3 Door', '33,356', '6.99%', '$699', '4.99%', '$796', 'John Se 3 Doors', 'Capcars_LB_Bg.png', 'cooper_john.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_cars`
--
ALTER TABLE `tbl_cars`
  ADD PRIMARY KEY (`cars_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_cars`
--
ALTER TABLE `tbl_cars`
  MODIFY `cars_id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
