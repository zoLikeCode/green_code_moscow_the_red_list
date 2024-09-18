import React, { useState } from 'react';
import css from './SearchBlock.module.css';
import { SearchIcon } from '../../assets/SearchIcon';
import { DownArray } from '../../assets/DownArray';
import { PopupAllParks } from '../ui/popupAllParks/PopupAllParks';
import { PopupTypes } from '../ui/popupTypes/PopupTypes';
import { PopupStatus } from '../ui/popupStatus/PopupStatus';
import { PopupCount } from '../ui/popupCount/PopupCount';
import {
  useShowCountOnPage,
  useShowParks,
  useShowTypes,
  useShowStatus,
  useSearchAnimals,
} from '../../store';

export const SearchBlock = () => {
  const [activeParksPopup, setActiveParksPopup] = useState(false);
  const [activeTypesPopup, setActiveTypesPopup] = useState(false);
  const [activeStatusPopup, setActiveStatusPopup] = useState(false);
  const [activeCountPopup, setActiveCountPopup] = useState(false);

  const { parks, setParks } = useShowParks();
  const { types, setTypes } = useShowTypes();
  const { status, setStatus } = useShowStatus();
  const { countShows, setCountShows } = useShowCountOnPage();
  const { searchAnimals, setSearchAnimals } = useSearchAnimals();

  console.log(searchAnimals);

  return (
    <div className={css.mainContainer}>
      <form className={css.inputSearch}>
        <input
          placeholder="Животное, парк..."
          onChange={(e) => {
            setSearchAnimals(e.target.value);
          }}
        />
        <label>
          <SearchIcon />
        </label>
      </form>
      <button
        className={css.buttonParks}
        onClick={() => {
          setActiveParksPopup(!activeParksPopup);
        }}
      >
        <span className={css.parksText}>{parks}</span>
        <span>
          <DownArray />
        </span>
      </button>
      <PopupAllParks active={activeParksPopup} setActive={setActiveParksPopup} />
      <button
        className={css.buttonTypes}
        onClick={() => {
          setActiveTypesPopup(!activeTypesPopup);
        }}
      >
        <span className={css.typesText}>{types}</span>
        <span>
          <DownArray />
        </span>
      </button>
      <PopupTypes active={activeTypesPopup} setActive={setActiveTypesPopup} />
      <button
        className={css.buttonStatus}
        onClick={() => {
          setActiveStatusPopup(!activeStatusPopup);
        }}
      >
        <span className={css.statusText}>{status}</span>
        <span>
          <DownArray />
        </span>
      </button>
      <PopupStatus active={activeStatusPopup} setActive={setActiveStatusPopup} />
      <button
        className={css.buttonCountView}
        onClick={() => {
          setActiveCountPopup(!activeCountPopup);
        }}
      >
        {countShows}
        <span>
          <DownArray />
        </span>
      </button>
      <PopupCount active={activeCountPopup} setActive={setActiveCountPopup} />
    </div>
  );
};
