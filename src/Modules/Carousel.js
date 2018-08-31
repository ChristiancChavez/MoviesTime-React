import React, { Component } from 'react';
// import movie from '../Images/alpha-movies.jpg';
import serie from '../Images/casapapel-series.jpg';
import leftArrow from '../Images/left.png';
import rightArrow from '../Images/right.png';
let baseUrlImage = 'https://image.tmdb.org/t/p/w500';

class Carousel extends  Component {
    
    constructor(){
        super();
        this.requestMoviesList = this.requestMoviesList.bind(this);
    }

    requestMoviesList(){
        const { movies } = this.props;
        const fourteenGenres = movies.slice(0, 14);
        return fourteenGenres.map((movieCarousel) => <img className="carousel-category__image" key={movieCarousel.id} src={baseUrlImage+movieCarousel.backdrop_path} alt=""></img>)
    }

    render(){
        return(
            <div className="carousel">
                <div className="carousel-category">
                {this.requestMoviesList()}
                    <div className="carousel-category__arrows">
                        <img className="carousel-category__arrows-arrow" src={leftArrow} alt=""></img>
                        <img className="carousel-category__arrows-arrow" src={rightArrow} alt=""></img>
                    </div>
                    <button className="carousel-category__button carousel-category__button"> BEST CURRENT MOVIES</button>
                </div>
            </div>
        );
    }
}

export default Carousel;