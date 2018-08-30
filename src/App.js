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

class App extends Component {

componentDidMount(){
  requestGetGenresMovies().then((data) => {
    console.log(data);
  }).catch((error)  => {
    console.log(error);
  })
};

  render() {
    return (
      <div>
        <Header />
        {/* <ModalLogin /> */}
        {/* <Modal /> */}
        <Carousel />
        <Categories />
        <PrincipalContainerMovie />
        <SimilarMovies />
        <Transition />
      </div>
    );
  }
}

export default App;
