import React from 'react';
import css from './MainPage.module.css';

const MainPage = () => {
  return (
    <div className={css.mainContainer}>
      <div className={css.ryabchikContainer}>
        <div className={css.imageRyabchik} />
      </div>
      <div className={css.textContainer}>
        <h2 className={css.mainText}>
          Приветствую! Я Рябчик — помогу разобраться на сайте и в тонкостях жизни краснокнижных
          видов Москвы!
        </h2>
        <p className={css.descText}>
          Я уже не строю гнезда в Москве, потому что боюсь скоплений людей, машин и люблю тенистые
          старые леса. Но <span>хочу вернуться и помочь сохранить</span> и другие виды животных и
          птиц <span>и восстановить наш родной дом!</span>
        </p>
        <button className={css.buttonRyabchik}>Я тебе помогу!</button>
        <div className={css.imageLoop} />
      </div>
    </div>
  );
};

export default MainPage;
