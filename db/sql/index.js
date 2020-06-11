const mysql = require('mysql');
const mysqlConfig = require('../../config.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect();

connection.query(`

  CREATE DATABASE IF NOT EXISTS badmovies;

  USE badmovies;

  CREATE TABLE IF NOT EXISTS favorites (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    vote_average FLOAT,
    release_date DATE,
    genre VARCHAR(50),
    poster_path VARCHAR(255),
    overview VARCHAR(255)
  );

`);

module.exports = connection;

// poster url: https://image.tmdb.org/t/p/w300/hHu786go6qfzJ5xByDLgpKHoDP2.jpg
// poster_path: "/hHu786go6qfzJ5xByDLgpKHoDP2.jpg""



