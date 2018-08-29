import React, { Component } from 'react';

class Categories extends Component {
    render(){
        return(
            <div>
                <div className="categories">
                    <span className="categories__option">Billboard</span>
                    <span className="categories__option">Action</span>
                    <span className="categories__option">Romantic</span>
                    <span className="categories__option">Comedy</span>
                    <span className="categories__option">Terror</span>
                    <span className="categories__option">Adventure</span>
                    <span className="categories__option">Fantasy</span>
                    <span className="categories__option">Thriller</span>
                    <span className="categories__option">War</span>
                    <span className="categories__option">Coming Soon</span>
                </div>
            </div>
        );
    }
}

export default Categories;