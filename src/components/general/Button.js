import React from 'react';
import './ButtonStyle.css';

const Button = ({title='', handleClick=() => {}, size='medium', color='default', icon=<></>}) => {
  return (
    <button onClick={handleClick} className={`button ${size} ${color}`}>
      <span>{title}</span>
      {icon}
    </button>
  );
}

export default Button;