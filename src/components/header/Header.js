import React from 'react';
import { Sun } from 'react-feather';
import './HeaderStyle.css';

const Header = ({setSection}) => {
  return (
    <header className='App-header'>
      <div onClick={() => setSection('menu')} className='App-header-container'>
        <div className='--logo'>
          <Sun size={48} />
        </div>
        <div className='--title'>
          <span>Sunlight Interprise</span>
        </div>
      </div>
    </header>
  );
}

export default Header;