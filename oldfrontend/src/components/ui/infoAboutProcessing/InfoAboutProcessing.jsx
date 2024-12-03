import React, { useState, useEffect } from 'react';
import css from './InfoAboutProcessing.module.css';
import { CancelIcon } from '../../../assets/CancelIcon';
import { YesIcon } from '../../../assets/YesIcon';
import { AcceptIcon } from '../../../assets/AcceptIcon';
import { CloseIcon } from '../../../assets/CloseIcon';

export const InfoAboutProcessing = () => {
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    const isElementRemoved = localStorage.getItem('AboutProcessing') === 'true';
    setIsRemoved(isElementRemoved);
  }, []);

  const handleRemove = () => {
    setIsRemoved(true);
    localStorage.setItem('AboutProcessing', 'true');
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
        <h3 className={css.mainText}>Это раздел обработки заявок от горожан!</h3>
        <p className={css.descText}>
          Пользователи сообщают, если заметили какое-либо животное или растение. Здесь можно
          управлять входящими заявками
        </p>
        <div className={css.example}>
          <span>
            <CancelIcon />
          </span>
          <p>Отклонить</p>
          <span>
            <YesIcon />
          </span>
          <p>Принять (геометка будет добавлена на карту)</p>
          <span>
            <AcceptIcon />
          </span>
          <p>Изменить данные перед принятием</p>
        </div>
        <button
          className={css.thanksButton}
          type='button'
          onClick={() => {
            handleRemove();
          }}>
          Спасибо!
        </button>
        <button
          className={css.closeIcon}
          type='button'
          onClick={() => {
            handleRemove();
          }}>
          <CloseIcon />
        </button>
      </div>
      <div className={css.loopHelpImage} />
    </div>
  );
};
