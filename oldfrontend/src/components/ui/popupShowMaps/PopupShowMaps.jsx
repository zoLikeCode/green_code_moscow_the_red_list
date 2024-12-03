import React from 'react';
import css from './PopupShowMaps.module.css';
import { Placemark, YMaps, Map, ZoomControl } from '@pbe/react-yandex-maps';
import { CloseIcon } from './../../../assets/CloseIcon';

export const PopupShowMaps = ({ active, setActive, coords }) => {
  return (
    <div className={active ? css.mainContainer : css.noActiveMainContainer}>
      <div className={css.mainContent}>
        <YMaps>
          <Map
            defaultState={{ center: [55.78177, 37.425662], zoom: 12, controls: [] }}
            width='804px'
            height='592px'>
            <ZoomControl options={{ float: 'right' }} />
            <Placemark geometry={coords} />
          </Map>
        </YMaps>
      </div>
      <button
        className={css.closeButton}
        type='button'
        onClick={() => {
          setActive(false);
        }}>
        <CloseIcon />
      </button>
    </div>
  );
};
