import React from 'react';
import css from './PopupTypes.module.css';
import { UpArrow } from '../../../assets/UpArrow';

export const PopupTypes = ({ active = true, setActive }) => {
  return (
    <div className={active ? css.activeContainer : css.noActiveContainer}>
      <ul className={css.mainContent}>
        <li>
          Виды <UpArrow />
        </li>
        <li>Млекопитающие</li>
        <li>Птицы</li>
        <li>Пресмыкающиеся и земноводные</li>
        <li>Рыбы</li>
        <li>Беспозвоночные</li>
        <li>Сосудистные растения</li>
        <li>Моховидные</li>
        <li>Водоросли</li>
        <li>Лишайники</li>
        <li>Грибы</li>
      </ul>
    </div>
  );
};
