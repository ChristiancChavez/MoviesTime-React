import React, { Component } from 'react';
import search from '../Images/search.png';

class Modal extends Component {
    render(){
        return(
            <div className="modal hide">
                <div className="modal-container">
                    <input className="modal-container__input" type="text"></input>
                    <img className="modal-container__search" src={search} alt=""></img>
                </div>
            </div>
        )
    }
}
export default Modal;