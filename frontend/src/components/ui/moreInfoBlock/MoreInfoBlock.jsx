import React from 'react';
import css from './MoreInfoBlock.module.css';

export const MoreInfoBlock = ({ info }) => {
  return (
    <div className={css.mainContainer}>
      <p className={css.text}>{info}</p>
    </div>
  );
};
