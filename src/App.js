import React, { Component } from 'react';
import Header from './Modules/Header';
import Modal from './Modules/Modal';
import Carousel from './Modules/Carousel';
import Categories from './Modules/Categories';
import Transition from './Modules/Transition';
import PrincipalContainerMovie from './Modules/Principal-container-movie';
import ModalLogin from './Modules/Modal-login';
import SimilarMovies from './Modules/Similar-movies';
import './main.css';
import { requestGetGenresMovies } from './Request/request.js';
import { requestMoviesList } from './Request/request.js';
import { requestSimilarMovies } from './Request/request.js';
import {  requestInfoMovie } from './Request/request.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      genres: [],
      movies: [],
      similarMoviesList: [],
      allInfoMovie:[],
      movieToShow : {
        name: "",
        description: "",
        date: "",
        image: "",
        video:"",
      },
      isModalLoginOpen: false,
      isSearchOpen: false,
    }
    this.getMoviesList = this.getMoviesList.bind(this);
    this.getInfoMovie = this.getInfoMovie.bind(this);
    this.getSimilarMovies = this.getSimilarMovies.bind(this);
    this.changeMovieToShow = this.changeMovieToShow.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideSearch = this.hideSearch.bind(this);
    this.showSearch = this.showSearch.bind(this);
  }

  componentDidMount(){
    requestGetGenresMovies().then((info) => {
      let genreList = info.data.genres;
      this.getMoviesList(genreList[0].id);

      this.setState({
        genres: genreList, 
      })
    }).catch((error)  => {
      console.log(error);
    });
  }

  changeMovieToShow(infomovie){
    requestInfoMovie(infomovie.id).then((singleMovie) => {
      let allSingleMovie = singleMovie.data;
      this.getSimilarMovies(infomovie.id);
      this.setState({
        movieToShow:allSingleMovie,
      })
    }).catch((error) => {
      console.log(error);
    })
     const movieInfo = {
      title: infomovie.title,
      overview: infomovie.overview,
      release_date: infomovie.release_date,
      poster_path: infomovie.poster_path,
      trailer: infomovie.video,
    }
    this.setState({
      movieToShow: movieInfo,
    })
  }


  getMoviesList(genreId){
    requestMoviesList(genreId).then((list) => {
      let moviesList = list.data.results;
      this.getInfoMovie(moviesList[0].id);
      this.setState({
        movies: moviesList,
      })
    }).catch((error)  => {
      console.log(error);
    });
  }

  getInfoMovie(movieId){
    requestInfoMovie(movieId).then((infoMovie) => {
      let infoMovieSingle = infoMovie.data;
      this.getSimilarMovies(movieId);
      this.setState({
        movieToShow:infoMovieSingle,
      })
    }).catch((error) => {
      console.log(error);
    })
  }

  getSimilarMovies(movieId){
    requestSimilarMovies(movieId).then((similar) => {
      let similarMovies = similar.data.results
      this.setState({
        similarMoviesList: similarMovies,
      })
    }).catch((error) => {
      console.log(error);
    })
  }

  hideModal(){
    this.setState({
        isModalLoginOpen : false,
    })
  }

  showModal(){
    this.setState({
        isModalLoginOpen : true,
    })
  }

  hideSearch(){
    this.setState({
        isSearchOpen : false,
    })
  }

  showSearch(){
    this.setState({
        isSearchOpen : true,
    })
  }


  render() {
    return (
      <div>
        <Header showModal={this.showModal} showSearch={this.showSearch} />
        {this.state.isModalLoginOpen ? <ModalLogin hideModal={this.hideModal} /> : ""} 
        {this.state.isSearchOpen ? <Modal hideSearch={this.hideSearch} /> : ""}
        <Carousel movies={this.state.movies}/>
        <Categories  getMoviesList={this.getMoviesList}  genres={this.state.genres}/>
        <PrincipalContainerMovie changeMovieToShow={this.changeMovieToShow} movies={this.state.movies}  allInfoMovie={this.state.movieToShow} />
        <SimilarMovies changeMovieToShow={this.changeMovieToShow} similarMoviesList={this.state.similarMoviesList} />
        <Transition />
      </div>
    );
  }
}

export default App;
