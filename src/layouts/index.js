import React from 'react';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './layout.css';

const Layout = ({ children, location }) => {
  console.log(location);
  return (
    <div className="layout" style={location.pathname != '/' ? { backgroundColor: "#FDF5EA" } : {}}>
      <Header />
      <div className="body-box">
        {children}
      </div>
    </div>
  );
};

export default Layout;
