import React from 'react';
import css from './BlockHistoryWatch.module.css';

export const BlockHistoryWatch = ({ count, date, CadNumber }) => {
  return (
    <div className={css.mainContainer}>
      <div className={css.acceptContainer}>
        <p>
          Запрос: <span>{count}</span>
        </p>
      </div>
      <div className={css.date}>
        <p>
          Дата: <span>{date}</span>
        </p>
      </div>
      <div className={css.number}>
        <p>
          Кадастровый номер: <span>{CadNumber}</span>
        </p>
      </div>
    </div>
  );
};
