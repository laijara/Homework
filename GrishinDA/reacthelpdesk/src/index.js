import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const header = ReactDOM.createRoot(document.getElementById('header'));
header.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);

const main = ReactDOM.createRoot(document.getElementById('main'));
main.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

const footer = ReactDOM.createRoot(document.getElementById('footer'));
footer.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);

