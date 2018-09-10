import React, { Component } from 'react';
import Favorites from './Favorites';
import favorit from '../Images/favorit.png';
import favoritToggle from '../Images/movies.png';
const baseUrlTrailerDefault = 'https://www.youtube.com/embed/';
const baseUrlImage = 'https://image.tmdb.org/t/p/w500';

class PrincipalContainerMovie extends Component {
    constructor(){
        super();
        this.state = {
            isFavoritesVisible: false,
        }
        this.hideShowFavorites = this.hideShowFavorites.bind(this);
    }

    hideShowFavorites(){
        this.setState({
            isFavoritesVisible: !this.state.isFavoritesVisible, 
        })  
    };

    

    render(){
        const requestMovie = this.props.allInfoMovie;
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
                {this.state.isFavoritesVisible && <Favorites changeMovieToShow={this.props.changeMovieToShow} movies={this.props.movies} />}
                {this.state.isFavoritesVisible ? <img className="container__toggle" onClick={this.hideShowFavorites} src={favoritToggle} alt=""></img> : <img className="moveLeft" onClick={this.hideShowFavorites} src={favoritToggle} alt=""></img>}
                <div className="container-info">
                    <span className="container-info__title">{requestMovie.title}</span>
                    <div className="container-info__description">
                        <p  className="container-info__description-text">
                            {requestMovie.overview}
                        </p>
                        <span className="container-info__description-date">{requestMovie.release_date && requestMovie.release_date.substr(0, 4)}</span>
                        <img className="container-info__description-favorite"  src={favorit} alt=""/>
                    </div> 
                    {requestMovie.videos && requestMovie.videos.results[0] ? <iframe className="container-info__video"  src={baseUrlTrailerDefault + (requestMovie.videos && requestMovie.videos.results[0].key)}  allow="autoplay; encrypted-media" ></iframe> : <p style={iframeStyle}>This movie doesn't have a trailer</p>}
                </div> 
            </div>
        );
    }
}
export default PrincipalContainerMovie;