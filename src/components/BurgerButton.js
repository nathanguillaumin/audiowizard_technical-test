import React from 'react';
import '../styles/burger-button.css';

const BurgerButton = ({ onClick }) => {
  return (
    <button className='toggle-button' onClick={onClick}>
      <div className='toggle-button_line' />
      <div className='toggle-button_line' />
      <div className='toggle-button_line' />
    </button>
  );
};

export default BurgerButton;