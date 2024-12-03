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
      <div className='mainCenter'>
        <Outlet />
      </div>
      <div className='lowerCenter'>
        {location.pathname === '/guide' && <Footer />}
        {location.pathname === '/monitoring' && <Footer />}
        {location.pathname === '/monitoring/maps' && <Footer />}
        {location.pathname === '/monitoring/processing' && <Footer />}
      </div>
    </>
  );
};

export default Layout;
