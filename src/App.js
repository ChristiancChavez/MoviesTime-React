import React, { Component } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import Carousel from './components/Carousel';
import Categories from './components/Categories';
import Transition from './components/Transition';
import PrincipalContainerMovie from './components/Principal-container-movie';
import ModalLogin from './components/Modal-login';
import SimilarMovies from './components/Similar-movies';
import './main.css';
import { requestGetGenresMovies } from './Request/request.js';
import { requestMoviesList } from './Request/request.js';
import { requestSimilarMovies } from './Request/request.js';
import { requestInfoMovie } from './Request/request.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      genres: [],
      movies: [],
      similarMovies: [],
      movieToShow: {},
      isModalLoginOpen: false,
      isSearchOpen: false
    };

    this.getMoviesList = this.getMoviesList.bind(this);
    this.getInfoMovie = this.getInfoMovie.bind(this);
    this.getSimilarMovies = this.getSimilarMovies.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.hideSearch = this.hideSearch.bind(this);
    this.showSearch = this.showSearch.bind(this);
  }

  componentDidMount() {
    requestGetGenresMovies()
      .then(info => {
        const genres = info.data.genres;
        this.setState({
          genres
        });
        this.getMoviesList(genres[0].id);
      })
      .catch(error => {
        console.log(error);
      });
  }

  getMoviesList(genreId) {
    requestMoviesList(genreId)
      .then(list => {
        const movies = list.data.results;
        this.setState({
          movies
        });
        this.getInfoMovie(movies[0].id);
      })
      .catch(error => {
        console.log(error);
      });
  }

  getInfoMovie(movieId) {
    requestInfoMovie(movieId)
      .then(infoMovie => {
        const movieToShow = infoMovie.data;
        this.setState({
          movieToShow
        });
        this.getSimilarMovies(movieId);
      })
      .catch(error => {
        console.log(error);
      });
  }

  getSimilarMovies(movieId) {
    requestSimilarMovies(movieId)
      .then(similar => {
        const similarMovies = similar.data.results;
        this.setState({
          similarMovies
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  toggleModal() {
    this.setState({
      isModalLoginOpen: !this.state.isModalLoginOpen
    });
  }


  hideSearch() {
    this.setState({
      isSearchOpen: false
    });
  }

  showSearch() {
    this.setState({
      isSearchOpen: true
    });
  }

  render() {
    return (
      <div>
        <Header toggleModal={this.toggleModal} showSearch={this.showSearch} />
        {this.state.isModalLoginOpen ? (
          <ModalLogin toggleModal={this.toggleModal} />
        ) : (
          ''
        )}
        {this.state.isSearchOpen ? <Modal hideSearch={this.hideSearch} /> : ''}
        <Carousel movies={this.state.movies} />
        <Categories
          getMoviesList={this.getMoviesList}
          genres={this.state.genres}
        />
        <PrincipalContainerMovie
          changeMovieToShow={this.getInfoMovie}
          movies={this.state.movies}
          movieToShow={this.state.movieToShow}
        />
        <SimilarMovies
          changeMovieToShow={this.getInfoMovie}
          similarMovies={this.state.similarMovies}
        />
        <Transition />
      </div>
    );
  }
}

export default App;
