import React from 'react';
import './FooterStyle.css';

const Footer = () => {
  return (
    <footer className='App-footer'>
    <div className='footer-container'>
      <div className="--content">
        <p>All rights reserved</p>
        <p>made with <span className="heart">❤</span> by <a href="https://github.com/j-abreu" target="_blank">Jeregod</a></p>
      </div>
    </div>
    </footer>
  )
}

export default Footer;