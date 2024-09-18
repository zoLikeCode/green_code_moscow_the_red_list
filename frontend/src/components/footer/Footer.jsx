import React from 'react';
import css from './Footer.module.css';
import { UpArrow } from '../../assets/UpArrowV2';

export const Footer = () => {
  const scrollToUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={css.mainContainer}>
      <div className={css.mainContent}>
        <p
          onClick={() => {
            scrollToUp();
          }}
        >
          Наверх
          <span>↑</span>
        </p>
        <p>Красная книга Москвы, 2024</p>
      </div>
    </div>
  );
};
