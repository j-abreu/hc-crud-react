import React from 'react';
import { Link } from 'react-router-dom';
import { Sun } from 'react-feather';

const Header = () => {
  return (
    <Link to='/' className='App-header-container'>
      <div className='--logo'>
        <Sun size={48} />
      </div>
      <div className='--name'>
        <span>Sunlight Interprise</span>
      </div>
    </Link>
  );
}

export default Header;