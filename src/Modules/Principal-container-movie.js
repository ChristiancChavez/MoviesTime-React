import React, { Component } from 'react';
import Favorites from './Favorites';
import favorit from '../Images/favorit.png';
import imageBackground from '../Images/alpha-cover.jpg';
import favoritToggle from '../Images/favorit.png';


class PrincipalContainerMovie extends Component {
    render(){
        return(
            <div className="container">
                <Favorites />
                <img className="container__toggle" src={favoritToggle} alt=""></img>
                <div className="container-info">
                    <span className="container-info__title">ALPHA</span>
                    <div className="container-info__description">
                        <p  className="container-info__description-text">loremn ipsumloremn ipsumloremn ipsumloremn ipsumloremn ipsumloremn ipsumloremn ipsumloremn 
                        loremn ipsumloremn ipsumloremn ipsumloremn ipsumloremn ipsumloremn  
                        </p>
                        <span className="container-info__description-date">2018</span>
                        <img className="container-info__description-favorite" src={favorit} alt=""></img>
                    </div> 
                    <iframe className="container-info__video"  src="https://www.youtube.com/embed/SlL_6bDSd8E" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div> 
            </div>
        );
    }
}
export default PrincipalContainerMovie;