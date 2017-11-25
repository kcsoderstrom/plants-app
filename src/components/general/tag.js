import React from 'react';
import { Paragraph16 } from './text';
import X from '../icons/x';

import './tag.css';

const Tag = props => {
    const {
        className,
        onClick,
    } = props;
    return (
        <div className={`sightworthy-tag ${className || ''}`}>
            <Paragraph16>{props.children}</Paragraph16>
            <X 
                className='sightworthy-tag-close'
                onClick={onClick}/>
        </div>
    )
}

export default Tag;