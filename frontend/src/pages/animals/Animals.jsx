import React from 'react';
import css from './Animals.module.css';
import { ImageAnimalsPage } from '../../components/ui/imageAnimalsPage/ImageAnimalsPage';
import { Link } from 'react-router-dom';
import { HearthIcon } from '../../assets/HearthIcon';
import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';

const Animals = ({ nameAnimalsRu, nameAnimalsLat, order, family, desc, detachment, charset }) => {
  return (
    <div className={css.mainContainer}>
      <Link to='/guide' className={css.routeBack}>
        ← Назад
      </Link>
      <div className={css.mainContent}>
        <div className={css.imageContent}>
          <ImageAnimalsPage />
          <button className={css.buttonLikePhoto}>
            <span>
              <HearthIcon type={charset} />
            </span>
            Добавить в свой фотоальбом
          </button>
        </div>
        <div className={css.descAboutAnimalsContent}>
          <div className={css.typeNameContent}>
            <b>{nameAnimalsRu}</b>
            <i>{nameAnimalsLat}</i>
          </div>
          <div className={css.systematicsContent}>
            <div>
              {order.length === 0 ? (
                <span>
                  <b>Порядок:</b> <span className={css.systematicsCharacterRu}>{detachment}</span>
                </span>
              ) : (
                <span>
                  <b>Отряд:</b> <span className={css.systematicsCharacterRu}>{order}</span>
                </span>
              )}
            </div>
            <div>
              <b>Семейства</b>: <span className={css.systematicsCharacterRu}>{family}</span>{' '}
            </div>
          </div>
          <div className={css.placeAnimalContent}>
            <b>Распространение:</b> <span>{desc}</span>
          </div>
        </div>
      </div>
      <div className={css.addionalContent}>
        <div>
          <YMaps>
            <Map
              defaultState={{ center: [55.78177, 37.425662], zoom: 12 }}
              width='653px'
              height='364px'>
              <ZoomControl options={{ float: 'right' }} />
            </Map>
          </YMaps>
        </div>
        <div>
          <ImageAnimalsPage />
        </div>
      </div>
    </div>
  );
};

export default Animals;
