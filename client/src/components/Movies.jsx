import React from 'react';

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(movieDetails) {
    if (this.props.showFaves) {
      this.props.deleteMovie(movieDetails);
    } else {
      this.props.saveMovie(movieDetails);
    }
  }

  render() {
    return (
      <ul className='movies'>
        {this.props.movies.map(
          ({ title, vote_average, release_date, poster_path }) => (
            <li onClick={() => this.clickHandler({ title, vote_average, release_date, poster_path })} className='movie_item'>
              <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} />
              <div className='movie_description'>
                <h2>{title}</h2>
                <section className='movie_details'>
                  <div className='movie_year'>
                    <span className='title'>Date Released</span>
                    <span>{release_date}</span>
                  </div>
                  <div className='movie_rating'>
                    <span className='title'>Rating</span>
                    <span>{vote_average}</span>
                  </div>
                </section>
              </div>
            </li>
          ),
        )}
      </ul>
    );
  }
}

export default Movies;
