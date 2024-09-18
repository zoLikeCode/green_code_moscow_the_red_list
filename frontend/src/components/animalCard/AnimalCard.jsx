import React from 'react';
import css from './AnimalCard.module.css';
import { ImageAnimals } from '../ui/ImageAnimals/ImageAnimals';
import { MoreInfoBlock } from '../ui/MoreInfoBlock/MoreInfoBlock';

export const AnimalCard = ({
  typeNameRU,
  typeNameUK,
  orderRU,
  orderEU,
  familyRU,
  familyEU,
  desc,
}) => {
  return (
    <div className={css.mainContainer}>
      <ImageAnimals name={'Моховидные'} />
      <div className={css.mainContent}>
        <div className={css.typeName}>
          <b className={css.typeNameText}>{typeNameRU}</b>
          <i className={css.typeNameText}>{typeNameUK}</i>
        </div>
        <div className={css.systematicsContainer}>
          <p className={css.systematics}>
            <span className={css.systematicsText}>Порядок: </span>
            <span className={css.systematicsLowerText}>{orderRU} </span>
            <span className={css.systematicsCapText}>{`(${orderEU})`}</span>
          </p>
          <p className={css.systematics}>
            <span className={css.systematicsText}>Семейство: </span>
            <span className={css.systematicsLowerText}>{familyRU} </span>
            <span className={css.systematicsCapText}>{`(${familyEU})`} </span>
          </p>
        </div>
        <p className={css.descText}>{desc}</p>
        <div className={css.MoreInfoContainer}>
          <MoreInfoBlock info={'1 Под угрозой исчезновения'} />
          <MoreInfoBlock info={'Моховидные'} />
          <MoreInfoBlock info={'Царицыно'} />
          <MoreInfoBlock info={'Нескучный сад'} />
          <MoreInfoBlock info={'Останкино'} />
        </div>
      </div>
    </div>
  );
};
