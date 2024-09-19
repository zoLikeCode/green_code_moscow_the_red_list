import React from 'react';
import css from './AnimalCard.module.css';
import { ImageAnimals } from '../ui/imageAnimals/ImageAnimals';
import { MoreInfoBlock } from '../ui/moreInfoBlock/MoreInfoBlock';
import { Navigate } from 'react-router-dom';

export const AnimalCard = ({
  types,
  nameOnRus,
  nameOnLat,
  order,
  detachment,
  family,
  desc,
  idImage,
  infoArr,
}) => {
  console.log(infoArr);
  return (
    <div className={css.mainContainer}>
      <ImageAnimals name={types} stImage={idImage} />
      <div className={css.mainContent}>
        <div className={css.typeName}>
          <b className={css.typeNameText}>
            {nameOnRus.slice(0, 1).toUpperCase() +
              nameOnRus.slice(1, nameOnRus.length).toLowerCase()}
          </b>
          <i className={css.typeNameText}>{nameOnLat}</i>
        </div>
        <div className={css.systematicsContainer}>
          <p className={css.systematics}>
            {order.length !== 0 ? (
              <span className={css.systematicsText}>Порядок: </span>
            ) : (
              <span className={css.systematicsText}>Отряд: </span>
            )}
            {order.length !== 0 ? (
              <span className={css.systematicsLowerText}>{detachment} </span>
            ) : (
              <span className={css.systematicsLowerText}>{order} </span>
            )}
          </p>
          <p className={css.systematics}>
            <span className={css.systematicsText}>Семейство: </span>
            <span className={css.systematicsLowerText}>{family} </span>
          </p>
        </div>
        <p className={css.descText}>{desc}</p>
        <div className={css.MoreInfoContainer}>
          {infoArr.map((info) => {
            return <MoreInfoBlock info={info} />;
          })}
        </div>
      </div>
    </div>
  );
};
