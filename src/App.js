import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div id='App' className='App'>
      <header className='App-header'>
        <Header />
      </header>
      <main className='App-body'>
        <Menu />
      </main>
      <footer className='App-footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
