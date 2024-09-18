import React from 'react';
import css from './PopupTypes.module.css';
import { UpArrow } from '../../../assets/UpArrow';
import { useShowTypes } from '../../../store';

export const PopupTypes = ({ active = true, setActive }) => {
  const { types, setTypes } = useShowTypes();

  return (
    <div className={active ? css.activeContainer : css.noActiveContainer}>
      <ul className={css.mainContent}>
        <li>
          Виды <UpArrow />
        </li>
        <li
          onClick={() => {
            setTypes('Млекопитающие');
            setActive(false);
          }}
        >
          Млекопитающие
        </li>
        <li
          onClick={() => {
            setTypes('Птицы');
            setActive(false);
          }}
        >
          Птицы
        </li>
        <li
          onClick={() => {
            setTypes('Пресмыкающиеся и земноводные');
            setActive(false);
          }}
        >
          Пресмыкающиеся и земноводные
        </li>
        <li
          onClick={() => {
            setTypes('Рыбы');
            setActive(false);
          }}
        >
          Рыбы
        </li>
        <li
          onClick={() => {
            setTypes('Беспозвоночные');
            setActive(false);
          }}
        >
          Беспозвоночные
        </li>
        <li
          onClick={() => {
            setTypes('Сосудистные растения');
            setActive(false);
          }}
        >
          Сосудистные растения
        </li>
        <li
          onClick={() => {
            setTypes('Моховидные');
            setActive(false);
          }}
        >
          Моховидные
        </li>
        <li
          onClick={() => {
            setTypes('Водоросли');
            setActive(false);
          }}
        >
          Водоросли
        </li>
        <li
          onClick={() => {
            setTypes('Лишайники');
            setActive(false);
          }}
        >
          Лишайники
        </li>
        <li
          onClick={() => {
            setTypes('Грибы');
            setActive(false);
          }}
        >
          Грибы
        </li>
      </ul>
    </div>
  );
};
