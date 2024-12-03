import React from 'react';
import css from './Header.module.css';
import { Logo } from '../../assets/Logo';
import { Link, NavLink } from 'react-router-dom';
import { ExitIcon } from '../../assets/ExitIcon';

const setActive = ({ isActive }) => (isActive ? css.activeLink : css.noActiveLink);

export const Header = () => {
  return (
    <div className={css.mainContainer}>
      <div className={css.mainContent}>
        <div className={css.routesLogo}>
          <Link to="/" className={css.logoContent} />
          <NavLink to="/guide" className={setActive}>
            Путеводитель
          </NavLink>
          <NavLink to="/monitoring" className={setActive}>
            Мониторинг
          </NavLink>
        </div>
        <div className={css.entryExitContent}>
          <p className={css.entryExitText}>Мария</p>
          <ExitIcon />
        </div>
      </div>
    </div>
  );
};
