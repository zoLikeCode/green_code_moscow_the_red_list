import React from 'react';
import css from './Monitoring.module.css';
import { NavLink } from 'react-router-dom';
import { InfoAboutMonitoring } from '../../components/ui/infoAboutMonitoring/infoAboutMonitoring';
import { SearchIcon } from '../../assets/SearchIcon';
import { MapWithFilters } from '../../components/mapWithFilters/MapWithFilters';

const Monitoring = () => {
  return (
    <div className={css.mainContainer}>
      <div className={css.navContainer}>
        <div className={css.navContent}>
          <NavLink>Карта</NavLink>
          <NavLink>Обработка заявок</NavLink>
        </div>
      </div>
      <hr />
      <InfoAboutMonitoring />
      <div className={css.searchContainer}>
        <form className={css.searchForm}>
          <input placeHolder="Кадастровый номер участка" className={css.searchInput} />
          <label>
            <SearchIcon />
          </label>
        </form>
      </div>
      <MapWithFilters />
    </div>
  );
};

export default Monitoring;
