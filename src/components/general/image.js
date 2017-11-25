import React, { Component } from 'react'

import './image.css'

class Image extends Component {
    componentWillMount() {
        this.state = {
            loaded: false
        }
    }
    render() {
        const {
            className,
            imageClassName,
            src,
            alt,
            onLoad
        } = this.props;

        const {
            loaded
        } = this.state;

        return (
            <div className={`image-container ${loaded ? 'visible' : ''} ${className || ''}`}>
                {/*<div className="pulse"></div>*/}
                <img 
                    className={imageClassName} 
                    src={src} 
                    alt={alt}
                    onLoad={() => {
                        this.setState({loaded: true})
                        if (onLoad) {
                            onLoad();
                        }
                    }
                }/>
            </div>
        )
    }
}

export default Image