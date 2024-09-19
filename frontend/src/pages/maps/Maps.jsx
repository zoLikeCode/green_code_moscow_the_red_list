import React, { useState } from 'react';
import css from './Maps.module.css';
import { InfoAboutMonitoring } from '../../components/ui/infoAboutMonitoring/infoAboutMonitoring';
import { SearchIcon } from '../../assets/SearchIcon';
import { MapWithFilters } from '../../components/mapWithFilters/MapWithFilters';
import { AnimalCard } from '../../components/animalCard/animalCard';
import { Pagination } from '../../components/pagination/Pagination';
import { DownArray } from '../../assets/DownArray';
import { BlockHistoryWatch } from '../../components/ui/blockHistoryWatch/BlockHistoryWatch';

const Maps = () => {
  const [activeRegionalAnimals, setActiveRegionalAnimals] = useState(false);
  const [activeWatchHistory, setActiveWatchHistory] = useState(false);

  const [typeAnimal, setTypeAnimal] = useState([
    {
      id: 1,
      nameOnRus: 'Аааааа',
    },
    {
      id: 2,
      nameOnRus: 'Ббббб',
    },
    {
      id: 3,
      nameOnRus: 'Ввввв',
    },
    {
      id: 4,
      nameOnRus: 'Ггггг',
    },
    {
      id: 5,
      nameOnRus: 'Ддддд',
    },
    {
      id: 6,
      nameOnRus: 'Жжжжжж',
    },
    {
      id: 7,
      nameOnRus: 'Ииииии',
    },
  ]);

  return (
    <div>
      <InfoAboutMonitoring />
      <div className={css.searchContainer}>
        <form className={css.searchForm}>
          <input placeHolder='Кадастровый номер участка' className={css.searchInput} />
          <label>
            <SearchIcon />
          </label>
        </form>
      </div>
      <MapWithFilters />
      <div className={css.typesOnThisRegionContainer}>
        <p
          className={css.typeText}
          onClick={() => {
            setActiveRegionalAnimals(!activeRegionalAnimals);
            setActiveWatchHistory(false);
          }}>
          Виды, обитающие на этом участке{' '}
          <span>
            <DownArray />
          </span>
        </p>
        <div>
          {activeRegionalAnimals &&
            typeAnimal.map((animal) => {
              return <AnimalCard nameOnRus={animal.nameOnRus} />;
            })}
          <Pagination />
        </div>
      </div>
      <div className={css.historyWatchTerritoryContainer}>
        <p
          className={css.typeText}
          onClick={() => {
            setActiveWatchHistory(!activeWatchHistory);
            setActiveRegionalAnimals(false);
          }}>
          История просмотренных участков{' '}
          <span>
            <DownArray />
          </span>
        </p>
        <div>
          {activeWatchHistory && (
            <div>
              <BlockHistoryWatch />
              <BlockHistoryWatch />
              <BlockHistoryWatch />
              <BlockHistoryWatch />
              <BlockHistoryWatch />
            </div>
          )}
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default Maps;
