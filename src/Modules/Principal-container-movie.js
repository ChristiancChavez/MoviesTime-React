import React, { Component } from 'react';
import Favorites from './Favorites';
// import SimilarMovies from './Modules/Similar-movies';
import favorit from '../Images/favorit.png';
import imageBackground from '../Images/alpha-cover.jpg';
import favoritToggle from '../Images/favorit.png';
import SimilarMovies from './Similar-movies';

class PrincipalContainerMovie extends Component {
    render(){
        return(
            <div className="container">
                <Favorites />
                <div className="container-main">
                    <div className="container-movie">
                        <img className="container-movie__cover" src={imageBackground}></img>
                        <img className="container-movie__toggle" src={favoritToggle} alt=""></img>
                         <div className="container-info">
                            <span className="container-info__title">ALPHA</span>
                            <div className="container-info__description">
                                <p  className="container-info__description-text">loremn ipsumloremn ipsumloremn ipsumloremn ipsumloremn ipsumloremn ipsumloremn ipsumloremn 
                                loremn ipsumloremn ipsumloremn ipsumloremn ipsumloremn ipsumloremn  
                                </p>
                                <span className="container-info__description-date">2018</span>
                                <img className="container-info__description-favorite" src={favorit} alt=""></img>
                            </div> 
                        </div> 
                        <iframe className="container-movie__video" width="560" height="315" src="https://www.youtube.com/embed/SlL_6bDSd8E" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                    <SimilarMovies />
                </div>
            </div>
        );
    }
}
export default PrincipalContainerMovie;