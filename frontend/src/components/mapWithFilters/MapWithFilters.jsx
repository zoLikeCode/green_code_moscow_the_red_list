import React, { useState } from 'react';
import css from './MapWithFilters.module.css';
import { YMaps, Map, ZoomControl, Polygon } from '@pbe/react-yandex-maps';
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
        <hr className={css.hrMapFilters} />
        <div className={css.typesContainer}>
          <p>Вид</p>
          <CheckWithText>Млекопитающие</CheckWithText>
          <CheckWithText>Птицы</CheckWithText>
          <CheckWithText>Пресмыкающиеся и земноводные</CheckWithText>
          <CheckWithText>Рыбы</CheckWithText>
          <CheckWithText>Беспозвоночные</CheckWithText>
          <CheckWithText>Сосудистые растения</CheckWithText>
          <CheckWithText>Моховидные</CheckWithText>
          <CheckWithText>Водоросли</CheckWithText>
          <CheckWithText>Лишайники</CheckWithText>
          <CheckWithText>Грибы</CheckWithText>
        </div>
        <hr className={css.hrMapFilters} />
        <div className={css.natureStatus}>
          <p>Природоохранный статус</p>
          <div>
            <CheckWithText style={{ background: '#e64747' }} styleDiv={{ marginRight: '10px' }}>
              0
            </CheckWithText>
            <CheckWithText style={{ background: '#ff844f' }} styleDiv={{ marginRight: '10px' }}>
              1
            </CheckWithText>
            <CheckWithText style={{ background: '#ffed4f' }} styleDiv={{ marginRight: '10px' }}>
              2
            </CheckWithText>
            <CheckWithText style={{ background: '#d1ff4f' }} styleDiv={{ marginRight: '10px' }}>
              3
            </CheckWithText>
            <CheckWithText style={{ background: '#4fdfff' }}>4</CheckWithText>
          </div>
        </div>
        <hr className={css.hrMapFilters} />
        <div className={css.typesPoint}>
          <p>Тип меток</p>
          <CheckWithText>Подтверждены экспертами</CheckWithText>
          <CheckWithText styleText={{ marginTop: '26px' }}>
            Не подтверждены экспертами(сообщения от горожан)
          </CheckWithText>
        </div>
      </div>
      <div className={css.mapsContainer}>
        <YMaps>
          <Map
            defaultState={{ center: [55.78177, 37.425662], zoom: 14, controls: [] }}
            width='804px'
            height='592px'>
            <ZoomControl options={{ float: 'right' }} />
            <Polygon
              geometry={[
                [
                  [55.784519, 37.439889],
                  [55.785171, 37.431146],
                  [55.783992, 37.419938],
                ],
              ]}
              options={{
                fillColor: '#00FF00',
                strokeColor: '#0000FF',
                opacity: 0.5,
                strokeWidth: 5,
                strokeStyle: 'shortdash',
              }}
            />
          </Map>
        </YMaps>
      </div>
    </div>
  );
};
