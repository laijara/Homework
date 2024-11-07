import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Header from './Header';
import Application from './Application';
import Footer from './Footer';
import History from './History';
import { Route, Routes } from 'react-router-dom';

const header = ReactDOM.createRoot(document.getElementById('header'));
header.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);

const application = ReactDOM.createRoot(document.getElementById('main'));
application.render(
  <React.StrictMode>
    <Routes>
      <Route path='/Application' element={<Application/>}/>
    </Routes>
  </React.StrictMode>
);

const history = ReactDOM.createRoot(document.getElementById('main'));
history.render(
  <React.StrictMode>
      <Routes>
      <Route path='/History' element={<History/>}/>
    </Routes>
  </React.StrictMode>
);

const footer = ReactDOM.createRoot(document.getElementById('footer'));
footer.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);


