const movieModel = require('../models/movieModel.js');
const apiHelpers = require('../helpers/apiHelpers.js');

module.exports = {
  getSearch: (req, res) => {
    let genreID = req.get('genreID');

    apiHelpers.moviesRequest(genreID)
              .then(({data}) => { res.send(data.results) })
              .catch((err) => { res.sendStatus(500) });
  },
  getGenres: (req, res) => {
    apiHelpers.genresRequest()
              .then(({data}) => { res.send(data) })
              .catch((err) => { res.sendStatus(500) });


  },
  saveMovie: (req, res) => {
    Promise.resolve(movieModel.dbSave(req.body))
    .then(() => {res.sendStatus(201)})
    .catch((err) => { res.sendStatus(500) });
  },
  deleteMovie: (req, res) => {
    let title = req.get('title');
    Promise.resolve(movieModel.dbDelete(title))
    .then(() => {res.sendStatus(201)})
    .catch((err) => { res.sendStatus(500) });
  },
  getFavorites: (req, res) => {
    movieModel.dbGetAll((err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.send(results);
      }
    })
  }
}