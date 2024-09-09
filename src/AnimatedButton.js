import React from 'react';
import './AnimatedButton.css';

const AnimatedButton = ({ text, onClick }) => {
  return (
    <button className="animated-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default AnimatedButton;
