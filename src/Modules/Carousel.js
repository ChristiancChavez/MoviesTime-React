import React, { Component } from 'react';
import movie from '../Images/alpha-movies.jpg';
import serie from '../Images/casapapel-series.jpg';
import leftArrow from '../Images/left.png';
import rightArrow from '../Images/right.png';
class Carousel extends  Component {
    render(){
        return(
            <div className="carousel">
                <div className="carousel-category">
                    <img className="carousel-category__image" src={movie} alt=""></img>
                    <div className="carousel-category__arrows">
                        <img className="carousel-category__arrows-arrow" src={leftArrow} alt=""></img>
                        <img className="carousel-category__arrows-arrow" src={rightArrow} alt=""></img>
                    </div>
                    <button className="carousel-category__button carousel-category__button--movies">MOVIES</button>
                </div>
                <div className="carousel-category">
                    <img className="carousel-category__image" src={serie} alt=""></img>
                    <div className="carousel-category__arrows">
                        <img className="carousel-category__arrows-arrow" src={leftArrow} alt=""></img>
                        <img className="carousel-category__arrows-arrow" src={rightArrow} alt=""></img>
                    </div>
                    <button className="carousel-category__button">SERIES</button>
                </div>
            </div>
        );
    }
}

export default Carousel;