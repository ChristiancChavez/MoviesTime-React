import React, { Component } from 'react';
import leftArrow from '../Images/left.png';
import rightArrow from '../Images/right.png';
const baseUrlImage = 'https://image.tmdb.org/t/p/w500';

class Carousel extends  Component {
    
    constructor(){
        super();
        this.state = {
           view: 0,
        }

        this.moveRight = this.moveRight.bind(this);
        this.moveLeft = this.moveLeft.bind(this);
    }

    moveRight(){
        if(this.state.view === this.props.movies.length - 1){
            this.setState({
                view: 0,
            })
        }else {
            this.setState({
                view: this.state.view + 1,
            })
        }
        
    }

    moveLeft(){
        if(this.state.view === 0){
            this.setState({
                view: this.props.movies.length - 1,
            })
        }else {
            this.setState({
                view: this.state.view - 1,
            })
        }
    }
    
    componentDidMount() {
        this.interval = setInterval(() => {
            this.moveRight();
        }, 2000);
      }
      

    render(){
        const selectedMovie = this.props.movies[this.state.view];
        return(
            <div className="carousel">
                <div className="carousel-category">
                    <img className="carousel-category__image" src={baseUrlImage + (selectedMovie && selectedMovie.backdrop_path)} alt="" />
                    <div className="carousel-category__arrows">
                        <img className="carousel-category__arrows-arrow" onClick={this.moveLeft} src={leftArrow} alt="" />
                        <img className="carousel-category__arrows-arrow" onClick={this.moveRight} src={rightArrow} alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Carousel;