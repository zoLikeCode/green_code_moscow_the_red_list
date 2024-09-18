import React from 'react';
import css from './PopupCount.module.css';
import { UpArrow } from '../../../assets/UpArrow';

export const PopupCount = ({ active, setActive }) => {
  return (
    <div className={active ? css.activeContainer : css.noActiveContainer}>
      <ul className={css.mainContent}>
        <li>
          10
          <span>
            <UpArrow />
          </span>
        </li>
        <li>15</li>
        <li>20</li>
        <li>25</li>
        <li>50</li>
      </ul>
    </div>
  );
};
