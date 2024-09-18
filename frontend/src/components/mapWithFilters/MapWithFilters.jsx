import React, { useState } from 'react';
import css from './MapWithFilters.module.css';
import { YMaps, Map, ZoomControl } from '@pbe/react-yandex-maps';
import { CheckWithText } from '../ui/checkWithText/CheckWithText';
import { all } from 'axios';

export const MapWithFilters = () => {
  const [parentResult, setParentResult] = useState(false);

  return (
    <div className={css.mainContainer}>
      <div className={css.filtersContainer}>
        <div className={css.allObjectsContainer}>
          <p>Все объекты</p>
          <CheckWithText onChange={(result) => setParentResult(result)}>Все объекты</CheckWithText>
        </div>
        <hr />
      </div>
      <div className={css.mapsContainer}>
        <YMaps>
          <Map
            defaultState={{ center: [55.78177, 37.425662], zoom: 14, controls: [] }}
            width="804px"
            height="592px"
          >
            <ZoomControl options={{ float: 'right' }} />
          </Map>
        </YMaps>
      </div>
    </div>
  );
};
