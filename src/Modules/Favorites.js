import React, { Component } from 'react';
import covermovie from '../Images/alpha-cover.jpg';

class Favorites extends Component {
    render(){
        return(
            <div className="favorites"> 
                <span className="favorites__title">FAVORITES</span>
                <div className="favorites-movies">
                    <div className="favorites-movies__movie">
                        <img className="favorites-movies__movie-image" src={covermovie}alt=""></img>
                        <span className="favorites-movies__movie-text">ALPHA</span>
                        <span className="favorites-movies__movie-text">2018</span>
                    </div>
                    <div className="favorites-movies__movie">
                        <img className="favorites-movies__movie-image" src={covermovie}alt=""></img>
                        <span className="favorites-movies__movie-text">ALPHA</span>
                        <span className="favorites-movies__movie-text">2018</span>
                    </div>
                    <div className="favorites-movies__movie">
                        <img className="favorites-movies__movie-image" src={covermovie}alt=""></img>
                        <span className="favorites-movies__movie-text">ALPHA</span>
                        <span className="favorites-movies__movie-text">2018</span>
                    </div>
                    <div className="favorites-movies__movie">
                        <img className="favorites-movies__movie-image" src={covermovie}alt=""></img>
                        <span className="favorites-movies__movie-text">ALPHA</span>
                        <span className="favorites-movies__movie-text">2018</span>
                    </div>
                    <div className="favorites-movies__movie">
                        <img className="favorites-movies__movie-image" src={covermovie}alt=""></img>
                        <span className="favorites-movies__movie-text">ALPHA</span>
                        <span className="favorites-movies__movie-text">2018</span>
                    </div>
                    <div className="favorites-movies__movie">
                        <img className="favorites-movies__movie-image" src={covermovie}alt=""></img>
                        <span className="favorites-movies__movie-text">ALPHA</span>
                        <span className="favorites-movies__movie-text">2018</span>
                    </div>
                    <div className="favorites-movies__movie">
                        <img className="favorites-movies__movie-image" src={covermovie}alt=""></img>
                        <span className="favorites-movies__movie-text">ALPHA</span>
                        <span className="favorites-movies__movie-text">2018</span>
                    </div>
                    <div className="favorites-movies__movie">
                        <img className="favorites-movies__movie-image" src={covermovie}alt=""></img>
                        <span className="favorites-movies__movie-text">ALPHA</span>
                        <span className="favorites-movies__movie-text">2018</span>
                    </div>
                    <div className="favorites-movies__movie">
                        <img className="favorites-movies__movie-image" src={covermovie}alt=""></img>
                        <span className="favorites-movies__movie-text">ALPHA</span>
                        <span className="favorites-movies__movie-text">2018</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Favorites;