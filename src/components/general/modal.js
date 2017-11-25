// plop v1 
import React, { Component } from 'react';

import './modal.css';

class Modal extends Component {
    render() {
        const {
            className,
            isOpen, 
            closeModal
        } = this.props;
        
        return (
            <div 
                className={`modal-container ${className || ''} ${isOpen ? 'visible' : ''}`}
            >
                <div 
                className='modal-overlay'
                onClick={() => closeModal()}
                ></div>
                <div className="modal-content-container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Modal;