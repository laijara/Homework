import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Header from './Header';
import Footer from './Footer';
import History from './History';
import Application from './Application';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const content = ReactDOM.createRoot(document.getElementById('contentreact'));
content.render(
  <React.StrictMode>
    <Router>
      <header id="header">
      <Header></Header>
      </header>
      <main id="main">
      <Routes>
        <Route path="/" element={<History />}> </Route>
        <Route path="/application" element={<Application />}> </Route>
      </Routes>
      </main>
      <footer id="footer">
      <Footer></Footer>
      </footer>
    </Router>
  </React.StrictMode>
);
