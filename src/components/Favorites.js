import React, { Component } from 'react';
const baseUrlImage = 'https://image.tmdb.org/t/p/w500';

class Favorites extends Component {
    constructor(){
        super();
        this.listCategoryMovies = this.listCategoryMovies.bind(this);
    }


    listCategoryMovies(){
        const { movies, changeMovieToShow } = this.props;
        return movies.map((movie) => <div className="favorites-movies__movie" key={movie.id} onClick={() => changeMovieToShow(movie.id)}>
        <img className="favorites-movies__movie-image" src={baseUrlImage + (movie && movie.poster_path)} alt=""></img>
        <span className="favorites-movies__movie-text">{movie.title}</span>
        <span className="favorites-movies__movie-text">{movie.release_date.slice(0, 4)}</span>
        </div>)
    }  

    render(){
        return(
            <div className="favorites" > 
                <span className="favorites__title">Movies</span>
                <div className="favorites-movies">
                    {this.listCategoryMovies()}
                </div>
            </div>
        );
    }
}

export default Favorites;