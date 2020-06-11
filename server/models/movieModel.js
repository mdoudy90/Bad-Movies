//For SQL
const sqlDb = require('../../db/sql');
//For Mongo
const mongoDb = require('../../db/mongodb')

module.exports.dbSave = ({title, vote_average, release_date, genre, poster_path, overview}) => {
  sqlDb.query(`SELECT * FROM favorites WHERE title = ?;`, [title], (err, data) => {
    if (!err && !data.length) {
      sqlDb.query(`INSERT INTO favorites (title, vote_average, release_date, genre, poster_path, overview) VALUES (?, ?, ?, ?, ?, ?);`, [title, vote_average, release_date, genre, poster_path, overview])
    }
  });
}

module.exports.dbDelete = ({title}) => {
  sqlDb.query(`DELETE FROM favorites WHERE title = ?;`, [title]);
}