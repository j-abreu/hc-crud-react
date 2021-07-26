import React, {useState, useEffect } from 'react';
import { ArrowLeftCircle } from 'react-feather';
import { v4 } from 'uuid';
import './CostumersSectionStyle.css';

import Input from '../general/Input';
import Button from '../general/Button';
import { Trash2 } from 'react-feather';

const CostumersSection = ({ setSection }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [savedCostumers, setSavedCostumers] = useState([]);

  useEffect(() => {
    const costumerList = JSON.parse(window.localStorage.getItem('hc-costumers'));
    if (costumerList) {
      setSavedCostumers(costumerList);
    }
  }, [])

  const onSubmit = () => {
    const costumerList = [...savedCostumers];
    const newCostumer = {
      id: v4(),
      name,
      address,
      birthDate,
    };

    costumerList.unshift(newCostumer);
    window.localStorage.setItem('hc-costumers', JSON.stringify(costumerList));
    setSavedCostumers(costumerList);
    setName('');
    setAddress('');
    setBirthDate('');
  }

  const handleDelete = (id) => {
    const costumerList = savedCostumers.filter((costumer) => costumer.id !== id);
    setSavedCostumers(costumerList);
    window.localStorage.setItem('hc-costumers', JSON.stringify(costumerList));
  }

  const handleOnChangeName = (e) => {
    setName(e.currentTarget.value);
  }
  
  const handleOnChangeAddress = (e) => {
    setAddress(e.currentTarget.value);
  }
  const handleOnChangeBirthDate = (e) => {
    setBirthDate(e.currentTarget.value);
  }

  const renderCostumers = () => {
    console.log(savedCostumers)
    if (savedCostumers.length) {
      return savedCostumers.map((costumer, idx) => 
        <div key={idx} className='costumer'>
          <span className='--name'>{costumer.name}</span>
          <span className='--address'>{costumer.address}</span>
          <span className='--brith-date'>{costumer.birthDate}</span>
          <Button icon={<Trash2 />} handleClick={() => handleDelete(costumer.id)}></Button>
        </div>
      )
    }

    return <></>
  }


  return (
    <section className='section-constumers'>
      <h1>Costumers</h1>
      <div className='new-costumer-form-container'>
        <Input label='nome' value={name} onChange={handleOnChangeName} />
        <Input label='endereço' value={address} onChange={handleOnChangeAddress} />
        <Input label='data de nascimento' value={birthDate} onChange={handleOnChangeBirthDate} />
        <Button title='Salvar' size='medium' color='seaweed' handleClick={onSubmit} />
      </div>
      <div className='costumers-container'>
        {renderCostumers()}
      </div>
      <ArrowLeftCircle className='back-button' onClick={() => setSection('menu')} size={60} color="#1F7A8C" />
    </section>
  );
}

export default CostumersSection;