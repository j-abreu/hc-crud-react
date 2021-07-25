import React from 'react';
import SectionWrapper from '../sectionWrapper/SectionWrapper';
import { ArrowLeftCircle } from 'react-feather';
import './ProductsSectionStyle.css';


const ProductsSection = ({setSection}) => {

  return (
    <div>
      <h1>Products</h1>
      <ArrowLeftCircle className='back-button' onClick={() => setSection('menu')} size={60} color="#1F7A8C" />
    </div>
  );
}

export default ProductsSection;