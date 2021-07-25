import react from 'react';
import { Link } from 'react-router-dom';
import Button from '../general/Button';
import SectionWrapper from '../sectionWrapper/SectionWrapper';
import './MenuStyle.css';

const Menu = ({setSection}) => {

  return (
    <section className='section-menu'>
      <div className='welcome-message'>
        <h1>Seja bem vindo à Sunlight Enterprise</h1>
      </div>
      <div className='menu-container'>
        <div className='menu-container-products'>
          <Button handleClick={() => setSection('products')} title='Produtos' size='big' color='seaweed' />
        </div>
        <div className='menu-container-costumers'>
          <Button title='Clientes' size='big' color='seaweed' />
        </div>
      </div>
    </section>
  );
}

export default Menu;