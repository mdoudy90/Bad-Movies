import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search.jsx';
import Movies from './components/Movies.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      favorites: [],
      showFaves: false,
    };
    this.getMovies = this.getMovies.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.swapFavorites = this.swapFavorites.bind(this);
    this.loadFavorites = this.loadFavorites.bind(this);
  }

  componentDidMount() {
    Promise.resolve(this.getMovies(28)).then(this.loadFavorites());
  }

  getMovies(genreID) {
    axios
      .get('/movies/search', { headers: { genreID: genreID } })
      .then(({ data }) => {
        this.setState({ movies: data });
      });
  }

  saveMovie(movieDetails) {
    axios.post('/movies/save', movieDetails);

    let newFavorites = this.state.favorites.slice();
    newFavorites.push(movieDetails);
    this.setState({ favorites: newFavorites });
  }

  deleteMovie({ title }) {
    Promise.resolve(
      axios.delete('/movies/delete', { headers: { title: title } }),
    ).then(this.loadFavorites());
  }

  loadFavorites() {
    axios
      .get('/movies/favorites')
      .then(({ data }) =>
        data.map(({ title, vote_average, release_date, poster_path }) => {
          return { title, vote_average, release_date, poster_path };
        }),
      )
      .then((data) => {
        this.setState({ favorites: data });
      });
  }

  swapFavorites() {
    this.setState({
      showFaves: !this.state.showFaves,
    });
  }

  render() {
    return (
      <div className='app'>
        <header className='navbar'>
          <h1>Bad Movies</h1>
        </header>

        <div className='main'>
          <Search
            swapFavorites={this.swapFavorites}
            showFaves={this.state.showFaves}
            getMovies={this.getMovies}
          />
          <Movies
            movies={
              this.state.showFaves ? this.state.favorites : this.state.movies
            }
            showFaves={this.state.showFaves}
            saveMovie={this.saveMovie}
            deleteMovie={this.deleteMovie}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
