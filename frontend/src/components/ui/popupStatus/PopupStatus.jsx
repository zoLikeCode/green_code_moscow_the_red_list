import React from 'react';
import css from './PopupStatus.module.css';
import { UpArrow } from '../../../assets/UpArrow';

export const PopupStatus = ({ active = true, setActive }) => {
  return (
    <div className={active ? css.activeContainer : css.noActiveContainer}>
      <ul className={css.mainContent}>
        <li>
          Статус{' '}
          <span>
            <UpArrow />
          </span>
        </li>
        <li>0 Практически исчезли</li>
        <li>1 Под угрозой исчезновения</li>
        <li>2 Редкие или малочисленные</li>
        <li>3 Уязвимые, чья численность может сократиться</li>
        <li>4 Недостаточно данных</li>
      </ul>
    </div>
  );
};
