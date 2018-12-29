import React from 'react';
import './answerButton.css';

const AnswerButton = props => {
  const {
    className,
    option,
    onClick
  } = props;

  return (
    <button
        onClick={() => onClick(option)}
        className={`answer-button ${className || ''}`} >
      {option.text}
    </button>
  )
}

export default AnswerButton;
