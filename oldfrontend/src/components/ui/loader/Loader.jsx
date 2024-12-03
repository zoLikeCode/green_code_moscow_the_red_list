import React from 'react';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.mainContainer}>
      <div className={css.loader}></div>
    </div>
  );
};
