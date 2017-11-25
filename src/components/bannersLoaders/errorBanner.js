// plop v1
import React from 'react';

import './errorBanner.css';

const ErrorBanner = props => {
    const {
        className,
        text
    } = props;

    return (
        <div
            className={`error-banner ${className || ''}`}
        >
            <p>
                {text}
            </p>
        </div>
    )
}

export default ErrorBanner;