import React, { Component } from 'react';
const baseUrlImage = 'https://image.tmdb.org/t/p/w500';

class SimilarMovies extends Component {


    requestSimilarMovies(){
        const { similarMoviesList, changeMovieToShow } = this.props;
        const sixteen = similarMoviesList.slice(0, 16);
        return sixteen.map((similar) =>  <div className="similar__single" key={similar.id} onClick={() => changeMovieToShow(similar)}>
        <img className="similar__single-image" src={baseUrlImage + (similar && similar.backdrop_path)}alt=""></img>
        <span className="similar__single-name">{similar.title}</span>
        <span className="similar__single-date">{similar.release_date.slice(0, 4)}</span>
        </div>)
    }

    render(){
        return(
            <div className="similars">
                <div className="similars__title">
                    <span className="similars__title-text">SIMILAR MOVIES</span>
                </div>
                <div className="similar">
                {this.requestSimilarMovies()}
                </div>
            </div>
        );
    }
}
export default SimilarMovies;