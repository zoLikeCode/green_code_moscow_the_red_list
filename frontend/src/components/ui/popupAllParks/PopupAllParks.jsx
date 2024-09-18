import React from 'react';
import css from './PopupAllParks.module.css';
import { UpArrow } from '../../../assets/UpArrow';
import { useShowParks } from '../../../store';

export const PopupAllParks = ({ active, setActive }) => {
  const { parks, setParks } = useShowParks();

  return (
    <div className={active ? css.activeContainer : css.noActiveContainer}>
      <ul className={css.mainContent}>
        <li>
          Все парки{' '}
          <span>
            <UpArrow />
          </span>
        </li>
        <li
          onClick={() => {
            setParks('Серебряный бор');
            setActive(false);
          }}
        >
          Серебряный бор
        </li>
      </ul>
    </div>
  );
};
