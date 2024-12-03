import React from 'react';
import css from './ImageAnimals.module.css';

export const ImageAnimals = ({ name, stImage }) => {
  return (
    <div className={css.mainContainer}>
      <div className={css.typeContainer}>
        <span></span>
        <p className={css.nameType}>{name}</p>
      </div>
      <image src={stImage} />
      <div className={css.image} style={{ '--image-url': `url(${stImage})` }} />
    </div>
  );
};
