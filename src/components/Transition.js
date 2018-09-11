import React, { Component } from 'react';
import logo from '../Images/logo.png';
class Transition extends Component{
    render(){
        return(
            <div className="transition">
                <img className="transition__image" src={logo} alt=""></img>
                <img className="transition__image" src={logo} alt=""></img>
                <img className="transition__image" src={logo} alt=""></img>
                <img className="transition__image" src={logo} alt=""></img>
                <img className="transition__image" src={logo} alt=""></img>
                <img className="transition__image" src={logo} alt=""></img>
                <img className="transition__image" src={logo} alt=""></img>
                <img className="transition__image" src={logo} alt=""></img>
                <img className="transition__image" src={logo} alt=""></img>
            </div>
        );
    }
}

export default Transition;