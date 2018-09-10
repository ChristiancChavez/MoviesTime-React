import React, { Component } from 'react';
import logo from '../Images/logo.png';
import search from '../Images/search.png';
import userIcon from '../Images/user.png';
import modalLogin from './Modal-login';

class Header extends Component {

    render(){
        return(
            <div className="header">
                <img className="header__logo" src={logo} alt=""></img>
                <span className="header__title">Movies Time</span>
                <div className="header__finalOptions">
                    <img className="header__finalOptions-userIcon" onClick={this.props.showModal} src={userIcon} alt=""></img>
                    <img className="header__finalOptions-search" src={search} alt=""></img>
                </div>
            </div>
        );
    }
}

export default Header;