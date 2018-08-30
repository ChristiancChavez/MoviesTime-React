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

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <ModalLogin /> */}
        {/* <Modal /> */}
        <Carousel />
        <Categories />
        {/* <Transition /> */}
        <PrincipalContainerMovie />
        <SimilarMovies />
        <Transition />
      </div>
    );
  }
}

export default App;
