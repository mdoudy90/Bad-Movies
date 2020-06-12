const request = require('request');
const axios = require('axios');
const API_KEY = process.env.API_KEY || require('../../config.js').API_KEY;

const root = 'https://api.themoviedb.org/3/';
let url, endPoint, queries;

module.exports.genresRequest = () => {
  endPoint = 'genre/movie/list';
  url = `${root}${endPoint}?api_key=${API_KEY}`;
  return axios.get(url);
}

module.exports.moviesRequest = (genreID) => {
  endPoint = 'discover/movie';
  queries = `&sort_by=vote_average.asc&vote_count.gte=100&with_genres=${genreID}`;
  url = `${root}${endPoint}?api_key=${API_KEY}${queries}`;
  return axios.get(url);
}