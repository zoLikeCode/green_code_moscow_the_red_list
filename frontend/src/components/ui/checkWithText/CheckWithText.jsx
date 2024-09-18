import React, { useState } from 'react';
import css from './CheckWithText.module.css';

export const CheckWithText = ({ children, onChange }) => {
  const [result, setResult] = useState(false);

  const handleClick = () => {
    const newResult = !result;
    setResult(newResult);
    onChange(newResult);
  };
  return (
    <div className={css.mainContainer}>
      <div
        className={result ? css.iconActive : css.icon}
        onClick={() => {
          handleClick();
        }}
      ></div>
      <span className={css.text}>{children}</span>
    </div>
  );
};
