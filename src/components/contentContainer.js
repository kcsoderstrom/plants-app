// plop v1
import React from 'react';
import './contentContainer.css';

const ContentContainer = props => {
    const {
        className,
    } = props;

    return (
        <div
            className={`content-container container ${className || ''}`}
        >
            {props.children}
        </div>
    )
}

export default ContentContainer;