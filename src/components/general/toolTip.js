// plop v1
import React from 'react';
import './toolTip.css';

const ToolTip = props => {
    const {
        className,
        text,
        right,
        left,
        bottom,
    } = props;

 const classes = [
        right && !left ? 'right' : '',
        left && !right ? 'left': '',
        bottom ? 'bottom' : '',
    ]

    const labelAttrs = { 'data-toolTip': text }
    return (
        <div
            className={`tool-tip-container ${className || ''}`}
        >
            <div
                className={`tool-tip ${classes.join(' ')}`}
                {...labelAttrs}
            >
                {props.children}
            </div>
        </div>
    )
}

export default ToolTip;