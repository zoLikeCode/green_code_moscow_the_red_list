import React, { useEffect, useState } from 'react';
import css from './InfoAboutMonitoring.module.css';
import { CloseIcon } from './../../../assets/CloseIcon';

export const InfoAboutMonitoring = () => {
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    const isElementRemoved = localStorage.getItem('isElementRemoved') === 'true';
    setIsRemoved(isElementRemoved);
  }, []);

  const handleRemove = () => {
    setIsRemoved(true);
    localStorage.setItem('isElementRemoved', 'true');
  };

  if (isRemoved) {
    return null;
  }

  return (
    <div className={css.mainContainer}>
      <div className={css.ryabchikContainer}>
        <div className={css.ryabchikImage} />
      </div>
      <div className={css.descContainer}>
        <h3 className={css.mainText}>Добро пожаловать в карту системы мониторинга!</h3>
        <p className={css.descText}>
          Подсказываю: в данном разделе нужно{' '}
          <span>ввести кадастровый номер интересующего участка</span>, после чего{' '}
          <span>вы получите список краснокнижных видов</span>, обитающих или замеченных в пределах
          этих участков
        </p>
        <button
          className={css.thanksButton}
          type="button"
          onClick={() => {
            handleRemove();
          }}
        >
          Спасибо!
        </button>
      </div>
      <button
        className={css.closeIcon}
        type="button"
        onClick={() => {
          handleRemove();
        }}
      >
        <CloseIcon />
      </button>
      <div className={css.loopHelpImage} />
    </div>
  );
};
