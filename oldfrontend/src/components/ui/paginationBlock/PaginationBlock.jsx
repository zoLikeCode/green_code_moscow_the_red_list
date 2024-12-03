import React from 'react';
import css from './PaginationBlock.module.css';

export const PaginationBlock = ({ children, current, setCurrent }) => {
  return (
    <div
      className={current === children ? css.acitivty : css.noActivity}
      onClick={() => {
        setCurrent(children);
      }}>
      {children}
    </div>
  );
};
