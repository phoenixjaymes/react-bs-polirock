import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import '../css/App.css';

const App = () => (
  // <BrowserRouter basename='/lab/r-bs-polirock/'>
  <BrowserRouter>
    <Header />
    <Main />
    <Footer />
  </BrowserRouter>
);

export default App;
