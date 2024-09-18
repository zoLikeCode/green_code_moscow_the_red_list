import React, { useState } from 'react';
import { SearchBlock } from '../../components/searchBlock/searchBlock';
import css from './Guide.module.css';
import { InfoAboutGuide } from '../../components/ui/infoAboutGuide/InfoAboutGuide';
import { AnimalCard } from '../../components/animalCard/animalCard';
import { Pagination } from '../../components/pagination/Pagination';
import { useSearchAnimals } from '../../store';

const Guide = () => {
  const [infoAnimals, setInfoAnimals] = useState([
    {
      id: 1,
      typeNameRU: 'Аааааа',
    },
    {
      id: 2,
      typeNameRU: 'Ббббб',
    },
    {
      id: 3,
      typeNameRU: 'Ввввв',
    },
    {
      id: 4,
      typeNameRU: 'Ггггг',
    },
    {
      id: 5,
      typeNameRU: 'Ддддд',
    },
    {
      id: 6,
      typeNameRU: 'Жжжжжж',
    },
    {
      id: 7,
      typeNameRU: 'Ииииии',
    },
  ]);

  const { searchAnimals, setSearchAnimals } = useSearchAnimals();

  return (
    <div>
      <div className={css.search}>
        <SearchBlock />
      </div>
      <InfoAboutGuide />
      {/* <AnimalCard
        typeNameRU={'Аномодон утонченный'}
        typeNameUK={'Anomodon attenuatus (Hedw.) Hueb.'}
        orderRU={'гипновые'}
        orderEU={'Hypnales'}
        familyRU={'аномодоновые'}
        familyEU={'anomodontaceae'}
        desc={
          'Эпифит старых широколиственных лесов. В целом более южный вид, встречающийся в нашей зоне в основаниях стволов старых широколиственных деревьев и на свежем валеже, а также на выходах известняка.'
        }
      /> */}
      {infoAnimals
        .filter((animal) => {
          return (
            searchAnimals.trim() === '' ||
            animal.typeNameRU.toLowerCase().includes(searchAnimals.toLowerCase())
          );
        })
        .map((anim, index) => {
          return (
            <div key={index} className={css.animalList}>
              <AnimalCard typeNameRU={anim.typeNameRU} />
            </div>
          );
        })}
      <Pagination />
    </div>
  );
};

export default Guide;
