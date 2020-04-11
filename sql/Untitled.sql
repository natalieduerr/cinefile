-- MySQL dump 10.13  Distrib 8.0.19, for macos10.15 (x86_64)
--
-- Host: localhost    Database: films
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `award`
--

DROP TABLE IF EXISTS `award`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `award` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `award`
--

LOCK TABLES `award` WRITE;
/*!40000 ALTER TABLE `award` DISABLE KEYS */;
INSERT INTO `award` VALUES (1,'Academy Award for Best Picture'),(2,'Palme d\'Or');
/*!40000 ALTER TABLE `award` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `debuted_at_festival`
--

DROP TABLE IF EXISTS `debuted_at_festival`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `debuted_at_festival` (
  `id` int NOT NULL AUTO_INCREMENT,
  `film` int DEFAULT NULL,
  `festival` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `debuted_at_festival`
--

LOCK TABLES `debuted_at_festival` WRITE;
/*!40000 ALTER TABLE `debuted_at_festival` DISABLE KEYS */;
INSERT INTO `debuted_at_festival` VALUES (1,5,1),(2,7,1),(3,18,2),(4,20,1),(5,21,1),(6,22,1),(7,24,2),(8,27,1),(9,27,3),(10,28,2),(11,31,2),(12,32,2),(13,33,1),(14,34,1),(15,36,1),(16,42,4),(17,51,4),(18,53,4),(19,54,2),(20,54,3),(21,54,5),(22,56,4),(23,59,4),(24,61,4),(25,62,4),(26,64,4),(27,67,2),(28,69,4),(29,71,4),(30,72,3),(31,72,6),(32,74,4),(33,75,4),(34,78,3),(35,80,2),(36,80,3),(37,80,5),(38,81,7),(39,81,3),(40,81,6),(41,82,1),(42,82,3),(43,83,7),(44,83,3),(45,83,6),(46,84,2),(47,84,3),(48,85,7),(49,85,3),(50,86,7),(51,86,3),(52,86,5),(53,86,6),(54,87,1),(55,87,7),(56,87,5),(57,87,6),(58,88,1),(59,88,7),(60,88,3),(61,89,7),(62,89,3),(63,89,5),(64,89,6),(65,90,1),(66,90,3),(67,90,7),(68,90,6),(69,91,3),(70,91,6),(71,92,2);
/*!40000 ALTER TABLE `debuted_at_festival` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `director`
--

DROP TABLE IF EXISTS `director`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `director` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `birthdate` date NOT NULL,
  `gender` varchar(45) NOT NULL,
  `race` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `director`
--

LOCK TABLES `director` WRITE;
/*!40000 ALTER TABLE `director` DISABLE KEYS */;
INSERT INTO `director` VALUES (1,'William A. Wellman','1896-02-29','M','White'),(2,'Harry Beaumont','1888-02-10','M','White'),(3,'Lewis Milestone','1895-09-30','M','White'),(4,'Wesley Ruggles','1889-06-11','M','White'),(5,'Edmund Goulding','1891-03-20','M','White'),(6,'Frank Lloyd','1886-02-02','M','White'),(7,'Frank Capra','1897-05-18','M','White'),(8,'Robert Z. Leonard','1889-10-07','M','White'),(9,'William Dieterle','1893-07-15','M','White'),(10,'Victor Fleming','1889-02-23','M','White'),(11,'Alfred Hitchcock','1899-08-13','M','White'),(12,'John Ford','1894-02-01','M','White'),(13,'William Wyler','1902-07-01','M','White'),(14,'Michael Curtiz','1886-12-24','M','White'),(15,'Leo McCarey','1898-10-03','M','White'),(16,'Billy Wilder','1906-06-22','M','White'),(17,'Elia Kazan','1909-09-07','M','White'),(18,'Laurence Olivier','1907-05-22','M','White'),(19,'Robert Rossen','1908-03-16','M','White'),(20,'Joseph L. Mankiewicz','1909-02-11','M','White'),(21,'Vincente Minnelli','1903-02-28','M','White'),(22,'Cecil B. DeMille','1881-08-12','M','White'),(23,'Fred Zinnemann','1907-04-29','M','White'),(24,'Delbert Mann','1920-01-30','M','White'),(25,'Michael Anderson','1920-01-30','M','White'),(26,'David Lean','1908-03-25','M','White'),(27,'Robert Wise','1914-09-10','M','White'),(28,'Tony Richardson','1928-06-05','M','White'),(29,'George Cukor','1899-07-07','M','White'),(30,'Norman Jewison','1926-07-21','M','White'),(31,'Carol Reed','1906-12-30','M','White'),(32,'John Schlesinger','1926-02-16','M','White'),(33,'Franklin J. Schaffner','1920-05-30','M','White'),(34,'William Friedkin','1935-08-29','M','White'),(35,'Francis Ford Coppola','1939-04-07','M','White'),(36,'George Roy Hill','1921-12-20','M','White'),(37,'Miloš Forman','1932-02-18','M','White'),(38,'John G. Avildsen','1935-12-21','M','White'),(39,'Woody Allen','1935-12-01','M','White'),(40,'Michael Cimino','1939-02-03','M','White'),(41,'Robert Benton','1932-09-29','M','White'),(42,'Robert Redford','1936-08-18','M','White'),(43,'Hugh Hudson','1936-08-25','M','White'),(44,'Richard Attenborough','1923-08-29','M','White'),(45,'James L. Brooks','1940-05-09','M','White'),(46,'Sydney Pollack','1934-07-01','M','White'),(47,'Oliver Stone','1946-09-15','M','White'),(48,'Bernardo Bertolucci','1941-03-16','M','White'),(49,'Barry Levinson','1942-04-06','M','White'),(50,'Bruce Beresford','1940-08-16','M','White'),(51,'Kevin Costner','1955-01-18','M','White'),(52,'Jonathan Demme','1944-02-22','M','White'),(53,'Clint Eastwood','1930-05-31','M','White'),(54,'Steven Spielberg','1946-12-18','M','White'),(55,'Robert Zemeckis','1952-05-14','M','White'),(56,'Mel Gibson','1956-01-03','M','White'),(57,'Anthony Minghella','1954-01-06','M','White'),(58,'James Cameron','1954-08-16','M','White'),(59,'John Madden','1949-04-08','M','White'),(60,'Sam Mendes','1965-08-01','M','White'),(61,'Ridley Scott','1937-11-30','M','White'),(62,'Ron Howard','1954-03-01','M','White'),(63,'Rob Marshall','1960-10-17','M','White'),(64,'Peter Jackson','1961-10-31','M','White'),(65,'Paul Haggis','1953-03-10','M','White'),(66,'Martin Scorsese','1942-11-17','M','White'),(67,'Joel Coen','1954-11-29','M','White'),(68,'Danny Boyle','1956-10-20','M','White'),(69,'Kathryn Bigelow','1951-11-27','F','White'),(70,'Tom Hooper','1972-10-05','M','White'),(71,'Michel Hazanavicius','1967-03-29','M','White'),(72,'Ben Affleck','1972-08-15','M','White'),(73,'Steve McQueen','1969-10-09','M','Black'),(74,'Alejandro Iñárritu','1963-08-15','M','White'),(75,'Tom McCarthy','1966-06-07','M','White'),(76,'Barry Jenkins','1979-11-19','M','Black'),(77,'Guillermo del Toro','1964-10-09','M','White'),(78,'Peter Farrelly','1956-12-17','M','White'),(79,'Bong Joon-ho','1969-09-14','M','Asian');
/*!40000 ALTER TABLE `director` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `film`
--

DROP TABLE IF EXISTS `film`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `film` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `date_released` date NOT NULL,
  `passes_bechdol` tinyint(1) NOT NULL,
  `runtime` int NOT NULL,
  `rating` varchar(45) DEFAULT NULL,
  `photo` varchar(45) DEFAULT 'noPic.jpg',
  `director` int DEFAULT NULL,
  `genre` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=93 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `film`
--

LOCK TABLES `film` WRITE;
/*!40000 ALTER TABLE `film` DISABLE KEYS */;
INSERT INTO `film` VALUES (1,'Wings','1927-08-12',0,144,'PG-13','/imgs/wings.jpg',1,1),(2,'The Broadway Melody','1929-06-12',1,100,'','/imgs/broadway.jpg',2,2),(3,'All Quiet on the Western Front','1930-04-21',0,152,'','/imgs/all_quiet.jpg',3,1),(4,'Cimarron','1931-02-09',1,124,'','/imgs/cimarron.jpg',4,3),(5,'Grand Hotel','1932-04-12',1,112,'','/imgs/grand_hotel.jpg',5,4),(6,'Cavalcade','1933-04-15',1,112,'','/imgs/cavalcade.jpg',6,4),(7,'It Happened One Night','1934-02-22',1,105,'','/imgs/it_happened.jpg',7,5),(8,'Mutiny on the Bounty','1935-11-08',0,132,'','/imgs/mutiny.jpg',6,4),(9,'The Great Ziegfeld','1936-09-04',1,177,'','/imgs/great_ziegfield.jpg',8,2),(10,'The Life of Emile Zola','1937-08-11',0,116,'','/imgs/emile_zola.jpg',9,4),(11,'You Can\'t Take It With You','1938-08-23',0,126,'','/imgs/cant_take_it.jpg',7,5),(12,'Gone with the Wind','1939-12-15',1,221,'','/imgs/gone_wind.jpg',10,4),(13,'Rebecca','1940-04-12',1,130,'','/imgs/rebecca.jpg',11,4),(14,'How Green Was My Valley','1941-10-28',0,118,'','/imgs/how_green.jpg',12,4),(15,'Mrs. Miniver','1942-06-04',1,133,'','/imgs/miniver.jpg',13,4),(16,'Casablanca','1943-01-23',0,102,'PG','/imgs/casablanca.jpg',14,4),(17,'Going My Way','1944-05-03',0,126,'','/imgs/going_my_way.jpg',15,2),(18,'The Lost Weekend','1945-11-29',0,99,'','/imgs/lost_weekend.jpg',16,4),(19,'The Best Years of Our Lives','1946-11-21',0,172,'','/imgs/best_years.jpg',13,4),(20,'Gentleman\'s Agreement','1947-11-11',0,118,'','/imgs/gents_agree.jpg',17,4),(21,'Hamlet','1948-05-04',0,155,'','/imgs/hamlet.jpg',18,4),(22,'All the King\'s Men','1949-11-08',0,110,'','/imgs/kings_men.jpg',19,4),(23,'All About Eve','1950-10-13',1,138,'','/imgs/all_about_eve.jpg',20,4),(24,'An American in Paris','1952-01-11',0,113,'','/imgs/am_in_paris.jpg',21,2),(25,'The Greatest Show on Earth','1952-01-10',0,152,'','/imgs/greatest_show.jpg',22,4),(26,'From Here to Eternity','1953-08-05',1,118,'','/imgs/here_eternity.jpg',23,4),(27,'On the Waterfront','1954-07-28',0,108,'','/imgs/waterfront.jpg',17,4),(28,'Marty','1955-04-11',1,90,'','/imgs/marty.jpg',24,4),(29,'Around the World in Eighty Days','1956-10-17',0,182,'G','/imgs/around_world.jpg',25,6),(30,'The Bridge on the River Kwai','1957-10-02',0,161,'PG','/imgs/river_kwai.jpg',26,1),(31,'Gigi','1958-05-15',0,115,'G','/imgs/gigi.jpg',21,2),(32,'Ben-Hur','1959-11-18',1,212,'G','/imgs/ben_hur.jpg',13,4),(33,'The Apartment','1960-06-30',1,125,'','/imgs/apartment.jpg',16,5),(34,'West Side Story','1961-10-18',1,152,'G','/imgs/west_side_story.jpg',27,2),(35,'Lawrence of Arabia','1962-12-10',0,228,'PG','/imgs/lawrence.jpg',26,4),(36,'Tom Jones','1963-09-29',1,128,'','/imgs/tom_jones.jpg',28,6),(37,'My Fair Lady','1964-10-21',1,170,'G','/imgs/my_fair_lady.jpg',29,2),(38,'The Sound of Music','1965-03-02',1,174,'G','/imgs/sound_music.jpg',27,2),(39,'A Man for All Seasons','1966-12-12',0,120,'G','/imgs/man_seasons.jpg',23,4),(40,'In the Heat of the Night','1967-08-02',0,109,'','/imgs/heat_night.jpg',30,8),(41,'Oliver!','1968-09-26',0,153,'G','/imgs/oliver.jpg',31,2),(42,'Midnight Cowboy','1969-05-25',0,113,'R','/imgs/midnight_cowboy.jpg',32,4),(43,'Patton','1970-04-02',0,170,'PG','/imgs/patton.jpg',33,1),(44,'The French Connection','1971-10-07',0,104,'R','/imgs/french_conn.jpg',34,7),(45,'The Godfather','1972-03-24',0,177,'R','/imgs/godfather.jpg',35,8),(46,'The Sting','1973-12-25',0,129,'R','/imgs/sting.jpg',36,8),(47,'The Godfather Part II','1974-12-20',0,200,'R','/imgs/godfather_2.jpg',35,8),(48,'One Flew Over the Cuckoo\'s Nest','1975-11-19',0,133,'R','/imgs/cuckoos_nest.jpg',37,4),(49,'Rocky','1976-12-03',0,119,'PG','/imgs/rocky.jpg',38,4),(50,'Annie Hall','1977-04-20',1,93,'PG','/imgs/annie_hall.jpg',39,5),(51,'The Deer Hunter','1979-02-23',0,183,'R','/imgs/deer_hunter.jpg',40,1),(52,'Kramer vs. Kramer','1979-12-19',0,105,'PG','/imgs/kramer.jpg',41,4),(53,'Ordinary People','1980-09-19',0,124,'R','/imgs/ord_peop.jpg',42,4),(54,'Chariots of Fire','1981-05-15',0,124,'PG','/imgs/chariots.jpg',43,4),(55,'Gandhi','1982-12-03',0,191,'PG','/imgs/gandhi.jpg',44,4),(56,'Terms of Endearment','1983-12-09',1,132,'PG','/imgs/terms_of_end.jpg',45,6),(57,'Amadeus','1984-09-19',1,161,'R','/imgs/amadeus.jpg',37,4),(58,'Out of Africa','1985-12-18',1,161,'PG','/imgs/out_africa.jpg',46,4),(59,'Platoon ','1986-12-19',0,120,'R','/imgs/platoon.jpg',47,1),(60,'The Last Emperor','1988-02-26',1,163,'PG-13','/imgs/last_emp.jpg',48,4),(61,'Rain Man','1988-12-16',0,134,'R','/imgs/rain_man.jpg',49,6),(62,'Driving Miss Daisy','1989-12-15',1,100,'PG','/imgs/miss_daisy.jpg',50,6),(63,'Dances with Wolves','1990-11-09',0,181,'PG-13','/imgs/dances_wolves.jpg',51,3),(64,'The Silence of the Lambs','1991-02-14',1,118,'R','/imgs/silence_lambs.jpg',52,9),(65,'Unforgiven','1992-08-07',1,131,'R','/imgs/unforgiven.jpg',53,3),(66,'Schindler\'s List','1993-12-15',1,195,'R','/imgs/schindler.jpg',54,4),(67,'Forrest Gump','1994-07-06',0,142,'PG-13','/imgs/forrest_gump.jpg',55,6),(68,'Braveheart','1995-05-24',0,178,'R','/imgs/braveheart.jpg',56,1),(69,'The English Patient','1996-11-15',1,162,'R','/imgs/eng_patient.jpg',57,4),(70,'Titanic','1997-12-19',1,195,'PG-13','/imgs/titanic.jpg',58,4),(71,'Shakespeare in Love','1998-12-11',1,123,'R','/imgs/shakespeare.jpg',59,5),(72,'American Beauty','1999-09-15',1,122,'R','/imgs/am_beauty.jpg',60,4),(73,'Gladiator','2000-05-05',0,155,'R','/imgs/gladiator.jpg',61,4),(74,'A Beautiful Mind','2001-12-13',0,135,'PG-13','/imgs/beaut_mind.jpg',62,4),(75,'Chicago','2002-12-27',1,113,'PG-13','/imgs/chicago.jpg',63,2),(76,'The Lord of the Rings: Return of the King','2003-12-17',0,201,'PG-13','/imgs/return_king.jpg',64,10),(77,'Million Dollar Baby','2004-12-15',1,132,'PG-13','/imgs/mill_baby.jpg',53,4),(78,'Crash','2004-09-10',1,112,'R','/imgs/crash.jpg',65,4),(79,'The Departed','2006-10-06',0,151,'R','/imgs/departed.jpg',66,8),(80,'No Country for Old Men','2007-11-09',1,122,'R','/imgs/no_country.jpg',67,7),(81,'Slumdog Millionaire','2008-12-25',0,120,'R','/imgs/slumdog.jpg',68,4),(82,'The Hurt Locker','2009-06-26',0,131,'R','/imgs/hurt_locker.jpg',69,1),(83,'The King\'s Speech','2010-12-23',1,119,'R','/imgs/kings_speech.jpg',70,4),(84,'The Artist','2011-10-12',0,100,'PG-13','/imgs/artist.jpg',71,4),(85,'Argo','2012-10-12',1,120,'R','/imgs/argo.jpg',72,4),(86,'12 Years a Slave','2013-11-08',1,134,'R','/imgs/12_years.jpg',73,4),(87,'Birdman or: (The Unexpected Virtue of Ignorance) ','2014-10-17',1,119,'R','/imgs/birdman.jpg',74,4),(88,'Spotlight','2015-11-06',0,129,'R','/imgs/spotlight.jpg',75,4),(89,'Moonlight','2016-10-21',0,111,'R','/imgs/moonlight.jpg',76,4),(90,'The Shape of Water','2017-12-01',1,123,'R','/imgs/shape_water.jpg',77,4),(91,'Green Book','2018-11-21',0,130,'PG-13','/imgs/green_book.jpg',78,6),(92,'Parasite','2019-05-30',1,132,'R','/imgs/parasite.jpg',79,7);
/*!40000 ALTER TABLE `film` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `film_festival`
--

DROP TABLE IF EXISTS `film_festival`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `film_festival` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `location` varchar(45) NOT NULL,
  `year_started` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `film_festival`
--

LOCK TABLES `film_festival` WRITE;
/*!40000 ALTER TABLE `film_festival` DISABLE KEYS */;
INSERT INTO `film_festival` VALUES (1,'Venice Film Festival','Venice, Italy',1932),(2,'Cannes Film Festival','Cannes, France',1946),(3,'Toronto International Film Festival','Toronto, Canada',1976),(4,'Berlin International Film Festival','Berlin, Germany',1951),(5,'New York Film Festival','New York City, United States',1963),(6,'BFI London Film Festival','London, England',1957),(7,'Telluride Film Festival','Telluride, United States',1974);
/*!40000 ALTER TABLE `film_festival` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genre`
--

DROP TABLE IF EXISTS `genre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genre` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genre`
--

LOCK TABLES `genre` WRITE;
/*!40000 ALTER TABLE `genre` DISABLE KEYS */;
INSERT INTO `genre` VALUES (1,'War'),(2,'Musical'),(3,'Western'),(4,'Drama'),(5,'Romantic comedy'),(6,'Comedy'),(7,'Thriller'),(8,'Crime'),(9,'Horror'),(10,'Fantasy');
/*!40000 ALTER TABLE `genre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `watched`
--

DROP TABLE IF EXISTS `watched`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `watched` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user` varchar(45) NOT NULL,
  `date` date NOT NULL,
  `rating` int DEFAULT NULL,
  `film` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `watched_chk_1` CHECK (((`rating` = NULL) or (`rating` = 1) or (`rating` = 2) or (`rating` = 3) or (`rating` = 4) or (`rating` = 5)))
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `watched`
--

LOCK TABLES `watched` WRITE;
/*!40000 ALTER TABLE `watched` DISABLE KEYS */;
INSERT INTO `watched` VALUES (1,'kia','2019-10-27',5,92),(2,'natalie','2019-11-13',5,89),(3,'natalie','2019-11-13',NULL,64),(4,'abby','2019-12-22',NULL,90),(5,'kia','2019-12-16',5,34),(6,'abby','2020-01-02',NULL,38),(7,'kia','2018-03-28',4,7),(8,'natalie','2020-02-16',NULL,42),(9,'abby','2020-04-08',NULL,16),(10,'kia','2020-04-06',3,91);
/*!40000 ALTER TABLE `watched` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `winner`
--

DROP TABLE IF EXISTS `winner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `winner` (
  `id` int NOT NULL AUTO_INCREMENT,
  `year` int NOT NULL,
  `film` int DEFAULT NULL,
  `award` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=96 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `winner`
--

LOCK TABLES `winner` WRITE;
/*!40000 ALTER TABLE `winner` DISABLE KEYS */;
INSERT INTO `winner` VALUES (1,1929,1,1),(2,1930,2,1),(3,1931,3,1),(4,1932,4,1),(5,1933,5,1),(6,1934,6,1),(7,1935,7,1),(8,1936,8,1),(9,1937,9,1),(10,1938,10,1),(11,1939,11,1),(12,1940,12,1),(13,1941,13,1),(14,1942,14,1),(15,1943,15,1),(16,1944,16,1),(17,1945,17,1),(18,1946,18,1),(19,1947,19,1),(20,1948,20,1),(21,1949,21,1),(22,1950,22,1),(23,1951,23,1),(24,1952,24,1),(25,1953,25,1),(26,1954,26,1),(27,1955,27,1),(28,1956,28,1),(29,1957,29,1),(30,1958,30,1),(31,1959,31,1),(32,1960,32,1),(33,1961,33,1),(34,1962,34,1),(35,1963,35,1),(36,1964,36,1),(37,1965,37,1),(38,1966,38,1),(39,1967,39,1),(40,1968,40,1),(41,1969,41,1),(42,1970,42,1),(43,1971,43,1),(44,1972,44,1),(45,1973,45,1),(46,1974,46,1),(47,1975,47,1),(48,1976,48,1),(49,1977,49,1),(50,1978,50,1),(51,1979,51,1),(52,1980,52,1),(53,1981,53,1),(54,1982,54,1),(55,1983,55,1),(56,1984,56,1),(57,1985,57,1),(58,1986,58,1),(59,1987,59,1),(60,1988,60,1),(61,1989,61,1),(62,1990,62,1),(63,1991,63,1),(64,1992,64,1),(65,1993,65,1),(66,1994,66,1),(67,1995,67,1),(68,1996,68,1),(69,1997,69,1),(70,1998,70,1),(71,1999,71,1),(72,2000,72,1),(73,2001,73,1),(74,2002,74,1),(75,2003,75,1),(76,2004,76,1),(77,2005,77,1),(78,2006,78,1),(79,2007,79,1),(80,2008,80,1),(81,2009,81,1),(82,2010,82,1),(83,2011,83,1),(84,2012,84,1),(85,2013,85,1),(86,2014,86,1),(87,2015,87,1),(88,2016,88,1),(89,2017,89,1),(90,2018,90,1),(91,2019,91,1),(92,2020,92,1),(93,1945,18,2),(94,1955,28,2),(95,2019,92,2);
/*!40000 ALTER TABLE `winner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'films'
--
/*!50003 DROP FUNCTION IF EXISTS `BCD_percent` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `BCD_percent`(uname VARCHAR(45)) RETURNS int
    READS SQL DATA
    DETERMINISTIC
BEGIN
	DECLARE count_movies INT;
    DECLARE count_BCD INT;
    
    SELECT COUNT(distinct film.id) INTO count_movies 
    FROM (SELECT film.id,watched.rate,watched.rating
		  FROM watched
		  INNER JOIN film
		  ON film.id = watched.film
		  WHERE winner.user = uname) AS uwu;
    
    SELECT COUNT(distinct film.id) INTO count_BCD
    FROM (SELECT film.id,watched.rate,watched.rating
		  FROM watched
		  INNER JOIN film
		  ON film.id = watched.film
		  WHERE winner.user = uname
          AND film.passes_bechdol = true) AS bc; 
	
    RETURN (count_BCD / count_movies * 100);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `check_repeat_film` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `check_repeat_film`(fname VARCHAR(200), fdate DATE) RETURNS tinyint(1)
    READS SQL DATA
    DETERMINISTIC
BEGIN 
	DECLARE boo boolean;

	SET @homeland = NULL;
    SELECT fid INTO @homeland FROM film 
    WHERE film.name = fname
    AND film.date = fdate;
    
    CASE
    WHEN (@homeland = NULL)
		THEN SET boo = false;
	WHEN
    (@homeland > 0)
		THEN SET boo = TRUE;
	END CASE;
    
    RETURN(boo);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `rating_percentage` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `rating_percentage`(uname VARCHAR(45),rate INT) RETURNS int
    READS SQL DATA
    DETERMINISTIC
BEGIN
	DECLARE count_ratings INT;
    DECLARE count_rated INT;
    
    SELECT COUNT(watched.film) INTO count_ratings
    FROM watched
    WHERE watched.film = film.id
    AND watches.user = uname
    AND watched.rating = rate;
    
    SELECT COUNT(watched.film) INTO count_rated
    FROM watched
    WHERE watched.film = film.id
    AND watches.user = uname
    AND watched.rating != NULL;
    
    RETURN (count_rated / count_ratings);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `women_directed_percent` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `women_directed_percent`(uname VARCHAR(45)) RETURNS int
    READS SQL DATA
    DETERMINISTIC
BEGIN
	DECLARE count_movies INT;
    DECLARE count_women INT;
    
    SELECT COUNT(distinct film.id) INTO count_movies 
    FROM (SELECT film.id,watched.rate,watched.rating
		  FROM watched
		  INNER JOIN film
		  ON film.id = watched.film
		  WHERE winner.user = uname) AS uwu;
    
    SELECT COUNT(distinct film.id) INTO count_women
    FROM (SELECT film.id,watched.rate,watched.rating
		  FROM watched
		  INNER JOIN film
		  ON film.id = watched.film
          INNER JOIN director
          ON film.director = director.id
		  WHERE winner.user = uname
          AND director.gender = "woman") AS bc; 
	
    RETURN (count_women / count_movies * 100);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `create_film` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `create_film`(fn VARCHAR(200), fdr DATE, fpb BOOLEAN, fru INT,
							 fra VARCHAR(45), fp VARCHAR(45), fd INT, fg INT)
BEGIN
	INSERT INTO film(name,date_released,passes_bechdol,runtime,rating,photo,director,genre)
    VALUES (fn,fdr,fpb,fru,fra,fp,fd,fg);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `create_watched` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `create_watched`(uname VARCHAR(45),fid INT,wdate DATE,wrate INT)
BEGIN
	INSERT INTO watched(user,date,rating,film)
    VALUES (uname,wdate,wrate,fid);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `delete_watched` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `delete_watched`(wid INT)
BEGIN
	DELETE FROM watched
    WHERE id = wid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_all_films` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_all_films`()
BEGIN
	SELECT id, name, date_released FROM film;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_awards_for_film` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_awards_for_film`(fid INT)
BEGIN
	SELECT award.id, award.name, winner.year 
    FROM winner
    INNER JOIN award
    ON award.id = winner.award
    INNER JOIN film
    ON film.id = winner.film
    WHERE film.id = fid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_award_data` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_award_data`(aid int)
BEGIN
	SELECT * FROM award
    WHERE award.id = aid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_directors` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_directors`()
BEGIN
	SELECT director.id, director.name
    FROM director;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_director_data` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_director_data`(did int)
BEGIN
	SELECT * FROM director
    WHERE director.id = did;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_director_for_film` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_director_for_film`(fid INT)
BEGIN
	SELECT director.id, director.name
    FROM director
    INNER JOIN film
    ON film.director = director.id
    WHERE film.id = fid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_festivals_for_film` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_festivals_for_film`(fid INT)
BEGIN
	SELECT film_festival.id, film_festival.name 
	FROM film_festival
    INNER JOIN debuted_at_festival
    ON debuted_at_festival.festival = film_festival.id
    INNER JOIN film
    ON film.id = debuted_at_festival.film
    WHERE film.name = fname;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_film_festival_data` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_film_festival_data`(ffid int)
BEGIN
	SELECT * FROM film_festival
    WHERE film_festival.id = ffid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_film_for_award` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_film_for_award`(aid int)
BEGIN
	SELECT film.id, film.name, film.date_released
    FROM film
    INNER JOIN winner
    ON winner.film = film.id
    INNER JOIN award
    ON winner.award = award.id
    WHERE award.id = aid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_film_for_director` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_film_for_director`(did int)
BEGIN
	SELECT film.id, film.name, film.date_released
    FROM film
    WHERE film.director = did;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_film_for_film_festival` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_film_for_film_festival`(ffid int)
BEGIN
	SELECT film.id, film.name, film.date_released
    FROM film
    INNER JOIN debuted_at_festival
    ON debuted_at_festival.film = film.id
    INNER JOIN film_festival
    ON debuted_at_festival.festival = film_festival.id
    WHERE film_festival.id = ffid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_film_info` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_film_info`(fid INT)
BEGIN
	SELECT film.id, film.name, film.date_released, film.passes_bechdol,
		   film.runtime, film.rating, genre.name
	FROM film
    INNER JOIN genre
    ON genre.id = film.genre
    WHERE film.id = fid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_genres` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_genres`()
BEGIN
	SELECT * FROM genre;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_watched` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_watched`(uname VARCHAR(45))
BEGIN
	SELECT film.name,watched.rate,watched.rating
    FROM watched
    INNER JOIN film
    ON film.id = watched.film
    WHERE winner.user = uname;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `update_watched` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `update_watched`(wid INT,wdate DATE,wrate INT)
BEGIN
	UPDATE watched
    SET date=wdate
    AND rate=wrate
    WHERE id = wid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-11 13:10:21
