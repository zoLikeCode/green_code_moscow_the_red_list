import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/header/Header';
import { useLocation } from 'react-router-dom';
import { Footer } from '../components/footer/Footer';

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <div className="mainCenter">
        <Outlet />
      </div>
      {location.pathname === '/guide' && <Footer />}
    </>
  );
};

export default Layout;
