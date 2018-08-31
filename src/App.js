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

class App extends Component {
  constructor() {
    super();
    this.state = {
      genres: [],
      movies: [],
      series: [],
    }
  }

  componentDidMount(){
    requestGetGenresMovies().then((info) => {
      let genreList = info.data.genres;
      this.setState({
        genres: genreList,
        
      })
    }).catch((error)  => {
      console.log(error);
    });

    requestMoviesList(28).then((list) => {
      let moviesList = list.data.results;
      this.setState({
        movies: moviesList,
      })
    }).catch((error)  => {
      console.log(error);
    });

    requestMoviesList(10770).then((list) => {
      let seriesList = list.data.results;
      this.setState({
        series: seriesList,
      })
      console.log(seriesList);
    }).catch((error)  => {
      console.log(error);
    });
  }


  


  render() {
    return (
      <div>
        <Header />
        {/* <ModalLogin /> */}
        {/* <Modal /> */}
        <Carousel movies={this.state.movies}/>
        <Categories genres={this.state.genres}/>
        <PrincipalContainerMovie />
        <SimilarMovies />
        <Transition />
      </div>
    );
  }
}

export default App;
