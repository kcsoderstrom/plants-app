import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
// import { CSSTransition, TransitionGroup } from 'react-transition-group'
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';

import './FadeInOutSlideLeft.css';

export const FadeInOutSlideLeftItem = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={1000}
    classNames="fade"
  >
    {children}
  </CSSTransition>
);


const FadeInOutSlideLeft = props => {
  return (
     <TransitionGroup>
          {map(props.children, (child, i) => (
            <FadeInOutSlideLeftItem key={child.key}>
              {child}
            </FadeInOutSlideLeftItem>
          ))}
        </TransitionGroup>
  )
}

export default FadeInOutSlideLeft;