const request = require('request');
const axios = require('axios');
const { API_KEY } = require('../../config.js');

const root = 'https://api.themoviedb.org/3/';
let url, endPoint, queries;

module.exports.genresRequest = () => {
  endPoint = 'genre/movie/list';
  url = `${root}${endPoint}?api_key=${API_KEY}`;
  return axios.get(url);
}

module.exports.moviesRequest = (genreID) => {
  endPoint = 'discover/movie';
  queries = `&sort_by=vote_average.desc&with_genres=${genreID}`;
  url = `${root}${endPoint}?api_key=${API_KEY}${queries}`;
  return axios.get(url);
}