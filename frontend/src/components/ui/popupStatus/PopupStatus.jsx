import React from 'react';
import css from './PopupStatus.module.css';
import { UpArrow } from '../../../assets/UpArrow';
import { useShowStatus } from '../../../store';

export const PopupStatus = ({ active, setActive }) => {
  const { status, setStatus } = useShowStatus();

  return (
    <div className={active ? css.activeContainer : css.noActiveContainer}>
      <ul className={css.mainContent}>
        <li>
          Статус{' '}
          <span>
            <UpArrow />
          </span>
        </li>
        <li
          onClick={() => {
            setStatus('Практически исчезли');
            setActive(false);
          }}>
          0 Практически исчезли
        </li>
        <li
          onClick={() => {
            setStatus('Под угрозой исчезновения');
            setActive(false);
          }}>
          1 Под угрозой исчезновения
        </li>
        <li
          onClick={() => {
            setStatus('Редкие или малочисленные');
            setActive(false);
          }}>
          2 Редкие или малочисленные
        </li>
        <li
          onClick={() => {
            setStatus('Уязвимые, чья численность может сократиться');
            setActive(false);
          }}>
          3 Уязвимые, чья численность может сократиться
        </li>
        <li
          onClick={() => {
            setStatus('Недостаточно данных');
            setActive(false);
          }}>
          4 Недостаточно данных
        </li>
      </ul>
    </div>
  );
};
