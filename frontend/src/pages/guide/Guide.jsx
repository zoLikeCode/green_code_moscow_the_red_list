import React, { useState, useEffect } from 'react';
import { SearchBlock } from '../../components/searchBlock/SearchBlock';
import css from './Guide.module.css';
import { InfoAboutGuide } from '../../components/ui/infoAboutGuide/InfoAboutGuide';
import { AnimalCard } from '../../components/animalCard/AnimalCard';
import { Pagination } from '../../components/pagination/Pagination';
import { useSearchAnimals } from '../../store';
import { useShowCountOnPage } from '../../store';
import { LoadAnimals } from '../../services/AnimalsAPI';
import { Link } from 'react-router-dom';
import { Loader } from './../../components/ui/loader/Loader';
import { getPageCount } from '../../utils/pages';

const Guide = () => {
  const [infoAnimals, setInfoAnimals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { searchAnimals, setSearchAnimals } = useSearchAnimals();
  const { countShows, setCountShows } = useShowCountOnPage();

  const [countPage, setCountPage] = useState(0);
  const [nowPage, setNowPage] = useState(0);

  useEffect(() => {
    LoadingAnimals(nowPage, countShows);
  }, [countShows, nowPage]);

  const LoadingAnimals = async (page, limit) => {
    const response = await LoadAnimals(page, limit);
    setInfoAnimals(response.data.array);
    setCountPage(response.data.count);
    setIsLoading(false);
  };

  return (
    <div>
      <div className={css.search}>
        <SearchBlock />
      </div>
      <InfoAboutGuide />
      {isLoading && <Loader />}
      {infoAnimals
        // .filter((animal) => {
        //   return (
        //     searchAnimals.trim() === '' ||
        //     animal.nameOnRus.toLowerCase().includes(searchAnimals?.toLowerCase())
        //   );
        // })
        .map((anim, index) => {
          return (
            <div key={index} className={css.animalList}>
              <AnimalCard
                types={anim.chapter}
                nameOnRus={anim.red_list_name}
                nameOnLat={anim.red_list_name_lat}
                family={anim.red_family}
                order={anim.red_order}
                detachment={anim.detachment}
                desc={anim.distribution}
                idImage={`http://go.itatmisis.ru:3000/get_image/?image=${anim.url_image.toLowerCase()}`}
                infoArr={[anim.red_family, anim.red_status.slice(0, 20)]}
              />
            </div>
          );
        })}
      <Pagination
        totalCountPages={getPageCount(countPage, countShows)}
        nowPage={(page) => {
          setNowPage(page);
        }}
      />
    </div>
  );
};

export default Guide;
