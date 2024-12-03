import React, { useState } from 'react';
import css from './CheckWithText.module.css';

export const CheckWithText = ({ children, onChange, style, styleDiv, styleText }) => {
  const [result, setResult] = useState(false);

  const handleClick = () => {
    const newResult = !result;
    setResult(newResult);
    onChange(newResult);
  };
  return (
    <div className={css.mainContainer} style={styleDiv}>
      <div
        className={result ? css.iconActive : css.icon}
        onClick={() => {
          handleClick();
        }}
        style={style}
      ></div>
      <span className={css.text} style={styleText}>
        {children}
      </span>
    </div>
  );
};
