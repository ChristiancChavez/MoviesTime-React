import React, { Component } from 'react';
import Movies from './Movies';
const baseUrlTrailerDefault = 'https://www.youtube.com/embed/';
const baseUrlImage = 'https://image.tmdb.org/t/p/w500';

class PrincipalContainerMovie extends Component {

    render(){
        const requestMovie = this.props.movieToShow;
        const containerStyle = {
            backgroundImage: `url('${baseUrlImage}${requestMovie.backdrop_path}')`,
        }
        const iframeStyle = {
            color: "white",
            background : "black",
            fontfamily: "'Monoton', cursive", 
            fontSize: "20px",
        }
        return(
            <div className="container" style={containerStyle}>
                <Movies changeMovieToShow={this.props.changeMovieToShow} movies={this.props.movies} />
                <div className="container-info">
                    <span className="container-info__title">{requestMovie.title}</span>
                    <div className="container-info__description">
                        <p  className="container-info__description-text">
                            {requestMovie.overview}
                        </p>
                        <span className="container-info__description-date">{requestMovie.release_date && requestMovie.release_date.substr(0, 4)}</span>
                    </div> 
                    {requestMovie.videos && requestMovie.videos.results[0] ? <iframe className="container-info__video" title="Movie's trailer" src={baseUrlTrailerDefault + (requestMovie.videos && requestMovie.videos.results[0].key)}  allow="autoplay; encrypted-media" ></iframe> : <p style={iframeStyle}>This movie doesn't have a trailer</p>}
                </div> 
            </div>
        );
    }
}
export default PrincipalContainerMovie;