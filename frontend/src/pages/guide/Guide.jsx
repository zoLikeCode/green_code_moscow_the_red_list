import React from 'react';
import { SearchBlock } from '../../components/searchBlock/searchBlock';
import css from './Guide.module.css';
import { InfoAboutGuide } from '../../components/ui/infoAboutGuide/InfoAboutGuide';
import { AnimalCard } from '../../components/animalCard/animalCard';
import { Pagination } from '../../components/pagination/Pagination';

const Guide = () => {
  return (
    <div>
      <div className={css.search}>
        <SearchBlock />
      </div>
      <InfoAboutGuide />
      <AnimalCard
        typeNameRU={'Аномодон утонченный'}
        typeNameUK={'Anomodon attenuatus (Hedw.) Hueb.'}
        orderRU={'гипновые'}
        orderEU={'Hypnales'}
        familyRU={'аномодоновые'}
        familyEU={'anomodontaceae'}
        desc={
          'Эпифит старых широколиственных лесов. В целом более южный вид, встречающийся в нашей зоне в основаниях стволов старых широколиственных деревьев и на свежем валеже, а также на выходах известняка.'
        }
      />
      <AnimalCard
        typeNameRU={'Аномодон утонченный'}
        typeNameUK={'Anomodon attenuatus (Hedw.) Hueb.'}
        orderRU={'гипновые'}
        orderEU={'Hypnales'}
        familyRU={'аномодоновые'}
        familyEU={'anomodontaceae'}
        desc={
          'Эпифит старых широколиственных лесов. В целом более южный вид, встречающийся в нашей зоне в основаниях стволов старых широколиственных деревьев и на свежем валеже, а также на выходах известняка.'
        }
      />
      <AnimalCard
        typeNameRU={'Аномодон утонченный'}
        typeNameUK={'Anomodon attenuatus (Hedw.) Hueb.'}
        orderRU={'гипновые'}
        orderEU={'Hypnales'}
        familyRU={'аномодоновые'}
        familyEU={'anomodontaceae'}
        desc={
          'Эпифит старых широколиственных лесов. В целом более южный вид, встречающийся в нашей зоне в основаниях стволов старых широколиственных деревьев и на свежем валеже, а также на выходах известняка.'
        }
      />
      <AnimalCard
        typeNameRU={'Аномодон утонченный'}
        typeNameUK={'Anomodon attenuatus (Hedw.) Hueb.'}
        orderRU={'гипновые'}
        orderEU={'Hypnales'}
        familyRU={'аномодоновые'}
        familyEU={'anomodontaceae'}
        desc={
          'Эпифит старых широколиственных лесов. В целом более южный вид, встречающийся в нашей зоне в основаниях стволов старых широколиственных деревьев и на свежем валеже, а также на выходах известняка.'
        }
      />
      <AnimalCard
        typeNameRU={'Аномодон утонченный'}
        typeNameUK={'Anomodon attenuatus (Hedw.) Hueb.'}
        orderRU={'гипновые'}
        orderEU={'Hypnales'}
        familyRU={'аномодоновые'}
        familyEU={'anomodontaceae'}
        desc={
          'Эпифит старых широколиственных лесов. В целом более южный вид, встречающийся в нашей зоне в основаниях стволов старых широколиственных деревьев и на свежем валеже, а также на выходах известняка.'
        }
      />
      <Pagination />
    </div>
  );
};

export default Guide;
