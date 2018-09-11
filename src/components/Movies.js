import React, { Component } from 'react';
const baseUrlImage = 'https://image.tmdb.org/t/p/w500';

class movies extends Component {
    constructor(){
        super();
        this.listCategoryMovies = this.listCategoryMovies.bind(this);
    }


    listCategoryMovies(){
        const { movies, changeMovieToShow } = this.props;
        return movies.map((movie) => <div className="movies-movies__movie" key={movie.id} onClick={() => changeMovieToShow(movie.id)}>
        <img className="movies-movies__movie-image" src={baseUrlImage + (movie && movie.poster_path)} alt=""></img>
        <span className="movies-movies__movie-text">{movie.title}</span>
        <span className="movies-movies__movie-text">{movie.release_date.slice(0, 4)}</span>
        </div>)
    }  

    render(){
        return(
            <div className="movies" > 
                <span className="movies__title">Movies</span>
                <div className="movies-movies">
                    {this.listCategoryMovies()}
                </div>
            </div>
        );
    }
}

export default movies;