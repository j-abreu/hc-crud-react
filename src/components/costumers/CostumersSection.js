import React from 'react';
import { ArrowLeftCircle } from 'react-feather';
import './CostumersSectionStyle.css';

const CostumersSection = ({ setSection }) => {
  return (
    <section className='section-constumers'>
      <ArrowLeftCircle className='back-button' onClick={() => setSection('menu')} size={60} color="#1F7A8C" />
    </section>
  );
}

export default CostumersSection;