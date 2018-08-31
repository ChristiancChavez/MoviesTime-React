import React, { Component } from 'react';

class Categories extends Component {

    constructor(){
        super();
        this.renderGenresList = this.renderGenresList.bind(this);
    }

    renderGenresList(){
        const { genres } = this.props;
        const eighteenGenres = genres.slice(0, 18);
        return eighteenGenres.map((genre) => <span className="categories__option" key={genre.id}>{genre.name}</span>
        );
        
    }

    render(){
        return(
            <div>
                <div className="categories">
                    {this.renderGenresList()}
                </div>
            </div>
        );
    }
}

export default Categories;