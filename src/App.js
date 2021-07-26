import React, { useState } from 'react';
import './App.css';

import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';
import SectionWrapper from './components/sectionWrapper/SectionWrapper';
import ProductsSection from './components/products/ProductsSection';
import CostumersSection from './components/costumers/CostumersSection';

function App() {
  const [section, setSection] = useState('menu');

  const sections = {
    menu: <Menu setSection={setSection} />,
    products: <ProductsSection setSection={setSection} />,
    costumers: <CostumersSection setSection={setSection} />,
  }

  return (
    <div id='App' className='App'>
      <SectionWrapper setSection={setSection} content={sections[section]} />
    </div>
  );
}

export default App;
