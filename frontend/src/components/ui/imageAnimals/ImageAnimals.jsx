import React from 'react';
import css from './ImageAnimals.module.css';
import { BryophytaIcon } from '../../../assets/BryophytaIcon';

export const ImageAnimals = ({ name }) => {
  return (
    <div className={css.mainContainer}>
      <div className={css.typeContainer}>
        <span>
          <BryophytaIcon />
        </span>
        <p className={css.nameType}>{name}</p>
      </div>
      <div className={css.image} />
    </div>
  );
};
