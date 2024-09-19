import React, { useEffect, useState } from 'react';
import css from './Maps.module.css';
import { InfoAboutMonitoring } from '../../components/ui/infoAboutMonitoring/infoAboutMonitoring';
import { SearchIcon } from '../../assets/SearchIcon';
import { MapWithFilters } from '../../components/mapWithFilters/MapWithFilters';
import { AnimalCard } from '../../components/animalCard/animalCard';
import { Pagination } from '../../components/pagination/Pagination';
import { DownArray } from '../../assets/DownArray';
import { BlockHistoryWatch } from '../../components/ui/blockHistoryWatch/BlockHistoryWatch';
import { LoadAnimalsOnTerritory, LoadOnlyTrueRequests } from '../../services/ApplicationsAPI';
import { getPageCount } from '../../utils/pages';

const Maps = () => {
  const [activeRegionalAnimals, setActiveRegionalAnimals] = useState(false);
  const [activeWatchHistory, setActiveWatchHistory] = useState(false);

  const [typeAnimal, setTypeAnimal] = useState([]);
  const [liveAnimals, setLiveAnimals] = useState([]);

  const [countAnimals, setCountAnimals] = useState(0);
  const [nowPage, setNowPage] = useState(0);

  useEffect(() => {
    LoadingAnimals();
    LoadingAnimalsPagination(1);
  }, []);

  const LoadingAnimals = async () => {
    const response = await LoadOnlyTrueRequests();
    setCountAnimals(response.count);
    setTypeAnimal(response.array);
  };

  const LoadingAnimalsPagination = async (page) => {
    const response = await LoadAnimalsOnTerritory(page);
    setLiveAnimals(response.array);
  };

  console.log(liveAnimals);

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
      <MapWithFilters types={typeAnimal} />
      <div className={css.typesOnThisRegionContainer}>
        <p
          className={css.typeText}
          onClick={() => {
            setActiveRegionalAnimals(!activeRegionalAnimals);
            setActiveWatchHistory(false);
          }}>
          Виды, обитающие на этом участке
          <span>
            <DownArray />
          </span>
        </p>
        <div className={!activeRegionalAnimals && css.noActive}>
          {activeRegionalAnimals &&
            liveAnimals.map((anim) => {
              return (
                <AnimalCard
                  types={anim.red_list.chapter}
                  nameOnRus={anim.red_list.red_list_name}
                  nameOnLat={anim.red_list.red_list_name_lat}
                  family={anim.red_list.red_family}
                  order={anim.red_list.red_order}
                  detachment={anim.red_list.detachment}
                  desc={anim.red_list.distribution}
                  idImage={`http://go.itatmisis.ru:3000/get_image/?image=${anim.red_list.url_image.toLowerCase()}`}
                  infoArr={[anim.red_list.red_family, anim.red_list.red_status.slice(0, 20)]}
                />
              );
            })}

          <Pagination
            totalCountPages={getPageCount(countAnimals, 4)}
            nowPage={(page) => {
              setNowPage(page);
            }}
          />
        </div>
      </div>
      <div className={css.historyWatchTerritoryContainer}>
        <p
          className={css.typeText}
          onClick={() => {
            setActiveWatchHistory(!activeWatchHistory);
            setActiveRegionalAnimals(false);
          }}>
          История просмотренных участков
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
