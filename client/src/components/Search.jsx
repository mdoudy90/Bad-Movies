import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: []
    };
    this.getGenres = this.getGenres.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }
  getGenres() {
    return axios.get('movies/genres');
  }

  componentDidMount() {
    this.getGenres().then(({data}) => {
      this.setState({genres: data.genres});
    });
  }

  clickHandler() {
    this.props.getMovies(this.refs.genreOption.value);
  }

  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>
        <select ref='genreOption'>
          {this.state.genres.map((genre) => <option value={`${genre.id}`}>{genre.name}</option>)}
        </select>
        <br/><br/>

        <button onClick={this.clickHandler}>Search</button>

      </div>
    );
  }
}

export default Search;