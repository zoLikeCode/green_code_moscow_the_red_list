import React from 'react';
import css from './Animals.module.css';
import { ImageAnimalsPage } from '../../components/ui/imageAnimalsPage/ImageAnimalsPage';
import { Link } from 'react-router-dom';
import { HearthIcon } from '../../assets/HearthIcon';
import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';

const Animals = ({
  typeNameRU = 'Лесная куница',
  typeNameUK = 'Martes martes (Linnaeus, 1758)',
  orderRU = 'хищные',
  orderEU = 'carnivora',
  familyRU = 'куньи',
  familyEU = 'mustelidae',
  desc = 'В 1920-х гг. лесная куница встречалась в Лосином Острове. Отмечались заходы в Измайловский лес. В годы Великой Отечественной войны лесные куницы стали обычными в Измайловском лесу. Однако в период с 1980 по 2000 гг. куницы обитали только на территории 4 лесных массивов города: в Лосином Острове, Измайловском лесу, Битцевском и Тропарёвском л-ках. Известны заходы куницы в Ясеневский и Юго-Западный л-ки [10]. В середине 1980-х г. В.В. Кучерук наблюдал куницу в застроенной части города на улице Бутлерова. Она продолжительное время жила в глухих дворах с крупными деревьями и хорошо развитым кустарников, которые находились между многоэтажными домами [10]. В 2006 г. куница отмечена на ул. Гамалеи [26]. За 2011–2021 гг. вид отмечен в Зеленограде в 2017 г. [27] и в 2020  г. [2, 6, 21], в долине Сходни в Куркине в 2020 г. [24], в ГБС в 2020 г. [19] и в 2021 г. [28, 29], в Лосином Острове близ Гольянова в 2018 г. [26] и в Яузском л-ке в 2020 г. [18], в Кусковском л-ке в 2020 г. [23], в Терлецком л-ке в 2021 г. [30], в Битцевском лесу в 2017 г. [20] и в 2020 г. [3, 9, 22], в ФЗ «Долгие пруды» в 2018 г. [5], в 2018-2020 гг. в ЛЗ «Тёплый Стан» [4, 7, 8], в Северном Бутове в 2020 г. [3], и в 2021 г. [11], в Бутовском л-ке к востоку от д. Бачурино [17], в долине Ликовы между Московским и Мешковом в 2020 г. [31]',
}) => {
  return (
    <div className={css.mainContainer}>
      <Link to="/guide" className={css.routeBack}>
        ← Назад
      </Link>
      <div className={css.mainContent}>
        <div className={css.imageContent}>
          <ImageAnimalsPage />
          <button className={css.buttonLikePhoto}>
            <span>
              <HearthIcon />
            </span>
            Добавить в свой фотоальбом
          </button>
        </div>
        <div className={css.descAboutAnimalsContent}>
          <div className={css.typeNameContent}>
            <b>{typeNameRU}</b>
            <i>{typeNameUK}</i>
          </div>
          <div className={css.systematicsContent}>
            <div>
              <b>Отряд</b>: <span className={css.systematicsCharacterRu}>{orderRU}</span>{' '}
              <span className={css.systematicsCharacherEu}>{`(${orderEU})`}</span>
            </div>
            <div>
              <b>Семейства</b>: <span className={css.systematicsCharacterRu}>{familyRU}</span>{' '}
              <span className={css.systematicsCharacherEu}>{`(${familyEU})`}</span>
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
              width="653px"
              height="364px"
            >
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
