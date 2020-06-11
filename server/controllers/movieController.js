const movieModel = require('../models/movieModel.js');
const apiHelpers = require('../helpers/apiHelpers.js');

//Return requests to the client
module.exports = {
  getSearch: (req, res) => {
    // get the search genre

    //! UPDATE GENREID PARAMETER
    apiHelpers.moviesRequest(35)
              .then(({data}) => { res.send(data.results) })
              .catch((err) => { res.sendStatus(500) });
  },
  getGenres: (req, res) => {
    apiHelpers.genresRequest()
              .then(({data}) => { res.send(data) })
              .catch((err) => { res.sendStatus(500) });

  },
  saveMovie: (req, res) => {

  },
  deleteMovie: (req, res) => {

  }
}