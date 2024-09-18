import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <div className="mainCenter">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
