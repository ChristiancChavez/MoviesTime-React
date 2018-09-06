import React, { Component } from 'react';
import Favorites from './Favorites';
import favorit from '../Images/favorit.png';
import favoritToggle from '../Images/favorit.png';
const baseUrlTrailerDefault = 'https://www.youtube.com/embed/';

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
        console.log(requestMovie.id , " soy la info de la pelicula");
        return(
            <div className="container">
                {this.state.isFavoritesVisible && <Favorites />}
                {this.state.isFavoritesVisible ? <img className="container__toggle" onClick={this.hideShowFavorites} src={favoritToggle} alt=""></img> : <img className="moveLeft" onClick={this.hideShowFavorites} src={favoritToggle} alt=""></img>}
                <div className="container-info">
                    <span className="container-info__title">{requestMovie.title}</span>
                    <div className="container-info__description">
                        <p  className="container-info__description-text">
                            {requestMovie.overview}
                        </p>
                        {/* <span className="container-info__description-date">{requestMovie.release_date.slice(0, 4)}</span> */}
                        <img className="container-info__description-favorite" id={requestMovie.id} src={favorit} alt=""/>
                    </div> 
                    {/* <iframe className="container-info__video"  src={baseUrlTrailerDefault+}  allow="autoplay; encrypted-media" ></iframe> */}
                </div> 
            </div>
        );
    }
}
export default PrincipalContainerMovie;