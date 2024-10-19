import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import HomePage from './landing_page/home/Homepage.js';
import Signup from './landing_page/Signup/signup.js';
import Aboutpage from './landing_page/about/Aboutpage.js';
import Products from './landing_page/products/ProductPage.js';
import Pricing from './landing_page/home/Pricing.js';
import SupportPage from './landing_page/pricing/PricingPage.js';
import NotFound from './landing_page/NotFound.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>
      <Route path='/AboutPage' element={<Aboutpage/>}></Route>
      <Route path='/Products' element={<Products/>}></Route>
      <Route path='/Pricing' element={<Pricing/>}></Route>
      <Route path='/Support' element={<SupportPage/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
      

      
    </Routes>
  </BrowserRouter>
);

