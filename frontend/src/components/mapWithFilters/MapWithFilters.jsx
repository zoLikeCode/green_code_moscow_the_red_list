import React, { useState } from 'react';
import css from './MapWithFilters.module.css';
import { YMaps, Map, ZoomControl, Polygon, Placemark } from '@pbe/react-yandex-maps';
import { CheckWithText } from '../ui/checkWithText/CheckWithText';

export const MapWithFilters = ({ types }) => {
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
        <YMaps
          query={{
            ns: 'use-load-option',
            load: 'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon',
          }}>
          <Map
            defaultState={{ center: [55.78177, 37.425662], zoom: 12, controls: [] }}
            width='804px'
            height='592px'>
            <ZoomControl options={{ float: 'right' }} />
            {types.map((type) => {
              return (
                <Placemark
                  geometry={[type.lat, type.long]}
                  properties={{
                    balloonContentBody: `Животное - ${type.red_list.red_list_name.slice(0, 1).toUpperCase() + type.red_list.red_list_name.slice(1, type.red_list.red_list_name.length).toLowerCase()}. 
                    Кадастровый номер - ${type.cadastral}`,
                  }}
                />
              );
            })}
          </Map>
        </YMaps>
      </div>
    </div>
  );
};
