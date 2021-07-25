import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './SectionWrapperStyle.css';

const SectionWrapper = ({setSection, content}) => {
  return (
    <section className='section-wrapper'>
      <Header setSection={setSection} />
      {content}
      <Footer />
    </section>
  );
}

export default SectionWrapper;