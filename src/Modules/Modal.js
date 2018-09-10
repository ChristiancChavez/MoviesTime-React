import React, { Component } from 'react';
import search from '../Images/search.png';
import close from '../Images/cancel.png';

class Modal extends Component {
    render(){
        return(
            <div className="modal">
                <div className="modal-container">
                    <input className="modal-container__input" type="text"/>
                    <img className="modal-container__search" src={search} alt=""/>
                    <img className="modal-container__close"  src={close} alt="" onClick={this.props.hideSearch} />
                </div>
            </div>
        )
    }
}
export default Modal;