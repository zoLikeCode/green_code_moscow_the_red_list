import React, { useState } from 'react';
import css from './Monitoring.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import { InfoAboutMonitoring } from '../../components/ui/infoAboutMonitoring/infoAboutMonitoring';
import { SearchIcon } from '../../assets/SearchIcon';
import { MapWithFilters } from '../../components/mapWithFilters/MapWithFilters';
import { AnimalCard } from '../../components/animalCard/animalCard';
import { Pagination } from '../../components/pagination/Pagination';
import { DownArray } from '../../assets/DownArray';
import { BlockHistoryWatch } from '../../components/ui/blockHistoryWatch/BlockHistoryWatch';

const setActive = ({ isActive }) => (isActive ? css.activeLink : css.noActiveLink);

const Monitoring = () => {
  return (
    <div className={css.mainContainer}>
      <div className={css.navContainer}>
        <div className={css.navContent}>
          <NavLink to="maps" className={setActive}>
            Карта
          </NavLink>
          <NavLink to="processing" className={setActive}>
            Обработка заявок
          </NavLink>
        </div>
      </div>
      <hr />
      <Outlet />
    </div>
  );
};

export default Monitoring;
