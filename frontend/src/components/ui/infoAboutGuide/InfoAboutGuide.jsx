import React, { useEffect, useState } from 'react';
import css from './InfoAboutGuide.module.css';
import { CloseIcon } from '../../../assets/CloseIcon';

export const InfoAboutGuide = () => {
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
        <div className={css.imageRyabchik} />
      </div>
      <div className={css.textContainer}>
        <h3 className={css.mainText}>
          Это путеводитель по миру краснокнижной флоры и фауны города Москвы!
        </h3>
        <p className={css.descText}>
          Воспользуйся сортировкой и поиском, чтобы найти информацию об интересующих видах
        </p>
        <button
          className={css.buttonThanks}
          onClick={() => {
            handleRemove();
          }}
        >
          Спасибо!
        </button>
        <div className={css.imageLoopHelp} />
      </div>
      <button
        className={css.closeIcon}
        onClick={() => {
          handleRemove();
        }}
      >
        <CloseIcon />
      </button>
    </div>
  );
};
