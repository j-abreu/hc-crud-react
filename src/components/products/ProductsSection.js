import React, { useEffect, useState } from 'react';
import { Trash2 } from 'react-feather';
import SectionWrapper from '../sectionWrapper/SectionWrapper';
import { ArrowLeftCircle } from 'react-feather';
import './ProductsSectionStyle.css';
import Input from '../general/Input';
import Button from '../general/Button';


const ProductsSection = ({setSection}) => {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [savedProducts, setSavedProducts] = useState([]);

  useEffect(() => {
    const localStorage = window.localStorage;
    const productList = JSON.parse(localStorage.getItem('hc-products'));
    if (productList) {
      console.log(productList)
      setSavedProducts(productList);
    }
  }, [])

  const handleOnChangeName = (e) => {
    setName(e.currentTarget.value);
  }
  
  const handleOnChangePrice = (e) => {
    setPrice(e.currentTarget.value);
  }

  const handleOnChangeQuantity = (e) => {
    setQuantity(e.currentTarget.value);
  }

  const renderProducts = () =>{
    if (savedProducts.length > 0) {
      return savedProducts.map((product, idx) => 
        <div key={idx} className='product'>
          <div className='--name'>
            {product.name}
          </div>
          <div className='--price'>
            {product.price}
          </div>
          <div className='--quantity'>
            {product.quantity}
          </div>
          <Button icon={<Trash2 />}></Button>
        </div>
      );
    } else {
      return <></>;
    }
  }

  const onSubmit = () => {
    const localStorage = window.localStorage;
    const localProducts = JSON.parse(localStorage.getItem('hc-products'));
    if (localProducts) {
      localProducts.push({
        name,
        price,
        quantity
      })
      localStorage.setItem('hc-products', JSON.stringify(localProducts));
    } else {
      const newProductList = [
        {
          name,
          price,
          quantity
        }
      ];
      localStorage.setItem('hc-products', JSON.stringify(newProductList));
    }

    setSavedProducts(JSON.parse(localStorage.getItem('hc-products')));
  }

  return (
    <div>
      <h1>Products</h1>
      <div className='new-product-form-container'>
        <Input label='nome' value={name} onChange={handleOnChangeName} />
        <Input label='preço' value={price} onChange={handleOnChangePrice} />
        <Input label='quantidade' value={quantity} onChange={handleOnChangeQuantity} />
        <Button title='Salvar' size='medium' color='seaweed' handleClick={onSubmit} />
      </div>
      <div className='saved-products'>
        {renderProducts()}
      </div>
      <ArrowLeftCircle className='back-button' onClick={() => setSection('menu')} size={60} color="#1F7A8C" />
    </div>
  );
}

export default ProductsSection;