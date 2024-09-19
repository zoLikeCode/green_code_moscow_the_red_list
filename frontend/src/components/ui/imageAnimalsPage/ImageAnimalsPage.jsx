import React from 'react';
import css from './ImageAnimalsPage.module.css';

export const ImageAnimalsPage = ({ type }) => {
  return (
    <div className={css.mainContainer}>
      <div className={css.typeContent}>
        <p>{type}</p>
      </div>
      <div className={css.imageAnimals} />
    </div>
  );
};
