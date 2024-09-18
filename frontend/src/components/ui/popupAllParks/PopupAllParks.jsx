import React from 'react';
import css from './PopupAllParks.module.css';
import { UpArrow } from '../../../assets/UpArrow';

export const PopupAllParks = ({ active, setActive }) => {
  return (
    <div className={active ? css.activeContainer : css.noActiveContainer}>
      <ul className={css.mainContent}>
        <li>
          Все парки{' '}
          <span>
            <UpArrow />
          </span>
        </li>
        <li>Серебряный бор</li>
        <li>Тут парк!</li>
      </ul>
    </div>
  );
};
