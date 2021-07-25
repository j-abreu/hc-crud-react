import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ProductsSection from './components/products/ProductsSection';
import SectionWrapper from './components/sectionWrapper/SectionWrapper';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
