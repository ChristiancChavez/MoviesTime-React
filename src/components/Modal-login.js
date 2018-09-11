import React, { Component } from 'react';
import close from '../Images/cancel.png';
import facebook from '../Images/facebook.png';
import google from '../Images/google-plus.png';
import twitter from '../Images/twitter.png';

class Modal extends Component {


    
    render(){
        return(
            <div className="login">
                <div className="login-container">
                    <img className="login-container__close"  src={close} alt="" onClick={this.props.toggleModal} />
                    <span className="login-container__title">LOGIN</span>
                    <span className="login-container__text">Access with your account or Social Network</span>
                    <div className="login-container-networks">
                        <img className="login-container-networks__network login-container-networks__network--blue" src={facebook} alt=""></img>
                        <img className="login-container-networks__network login-container-networks__network--red" src={google} alt=""></img>
                        <img className="login-container-networks__network login-container-networks__network--sky" src={twitter} alt=""></img>
                    </div>
                    <input className="login-container__input" type="text"placeholder="User"></input>
                    <input className="login-container__input" type="text"placeholder="Password"></input>
                    <button className="login-container__button">Login</button>
                </div>
            </div>
        )
    }
}
export default Modal;