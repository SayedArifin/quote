import React from 'react';
import './Button.css';

const Button = (props) => {
  const handleClick = () => {
    window.location.href = props.link;
  };

  return (
    <div>
      <button className='animated-button' onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {props.text}
      </button>
    </div>
  );
};

export default Button;
