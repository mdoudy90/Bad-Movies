const mysql = require('mysql');
const mysqlConfig = require('../../config.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect();

connection.query(`

  CREATE DATABASE IF NOT EXISTS badmovies;

  USE badmovies;

  CREATE TABLE IF NOT EXISTS favorites (
    favorite_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    vote_average FLOAT,
    release_date DATE,
    poster_path VARCHAR(255),
    overview VARCHAR(255)
  );

  CREATE TABLE IF NOT EXISTS genres (
    genre_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    genre VARCHAR(255)
  );

  CREATE TABLE IF NOT EXISTS favorites_genres (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    favorite_id INT,
    genre_id INT
  );

`);

// poster url: https://image.tmdb.org/t/p/w300/hHu786go6qfzJ5xByDLgpKHoDP2.jpg
// poster_path: "/hHu786go6qfzJ5xByDLgpKHoDP2.jpg""



