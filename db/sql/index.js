const mysql = require('mysql');

const mysqlConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  multipleStatements: true
};

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
    poster_path VARCHAR(255)
  );

`);

module.exports = connection;