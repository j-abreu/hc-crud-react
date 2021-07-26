import React, { useEffect, useState } from 'react';
import { Trash2 } from 'react-feather';
import { ArrowLeftCircle } from 'react-feather';
import {v4} from 'uuid';
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

  const onSubmit = () => {
    const localProducts = [...savedProducts];
    const newProduct = {
      id: v4(),
      name,
      price,
      quantity,
    };
    localProducts.unshift(newProduct);
    window.localStorage.setItem('hc-products', JSON.stringify(localProducts));
    setSavedProducts(localProducts);
    setName('');
    setPrice('');
    setQuantity('');
  }

  const handleOnChangeName = (e) => {
    setName(e.currentTarget.value);
  }
  
  const handleOnChangePrice = (e) => {
    setPrice(e.currentTarget.value);
  }

  const handleOnChangeQuantity = (e) => {
    setQuantity(e.currentTarget.value);
  }

  const handleDelete = (id) => {
    console.log(savedProducts)
    const newProductList = savedProducts.filter((prod) => prod.id !== id);
    window.localStorage.setItem('hc-products', JSON.stringify(newProductList));
    console.log(newProductList);
    setSavedProducts(newProductList);
  }

  const renderProducts = () =>{
    if (savedProducts.length > 0) {
      return savedProducts.map((product, idx) => 
        <div key={idx} className='product'>
          <span className='--name'>
            {product.name}
          </span>
          <span className='--price'>
            {product.price}
          </span>
          <span className='--quantity'>
            {product.quantity}
          </span>
          <Button icon={<Trash2 />} handleClick={() => handleDelete(product.id)}></Button>
        </div>
      );
    }

    return <></>;
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