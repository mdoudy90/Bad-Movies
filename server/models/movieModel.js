const sqlDb = require('../../db/sql');

module.exports.dbSave = ({title, vote_average, release_date, poster_path}) => {
  sqlDb.query(`SELECT * FROM favorites WHERE title = ?;`, [title], (err, data) => {
    if (!err && !data.length) {
      sqlDb.query(`INSERT INTO favorites (title, vote_average, release_date, poster_path) VALUES (?, ?, ?, ?);`, [title, vote_average, release_date, poster_path])
    }
  });
}

module.exports.dbDelete = (title) => {
  sqlDb.query(`DELETE FROM favorites WHERE title = ?;`, [title]);
}

module.exports.dbGetAll = (callback) => {
  sqlDb.query(`SELECT * FROM favorites;`, (err, results) => {
    if (err) {
      callback(err)
    } else {
      callback(null, results)
    }
  });
}