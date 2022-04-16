import React from 'react';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="body-box">
        {children}
      </div>
    </div>
  );
};

export default Layout;
