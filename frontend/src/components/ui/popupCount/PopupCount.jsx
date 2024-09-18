import React from 'react';
import css from './PopupCount.module.css';
import { UpArrow } from '../../../assets/UpArrow';
import { useShowCountOnPage } from '../../../store';

export const PopupCount = ({ active, setActive }) => {
  const { countShows, setCountShows } = useShowCountOnPage();

  return (
    <div className={active ? css.activeContainer : css.noActiveContainer}>
      <ul className={css.mainContent}>
        <li
          onClick={() => {
            setCountShows(10);
            setActive(false);
          }}
        >
          10
          <span>
            <UpArrow />
          </span>
        </li>
        <li
          onClick={() => {
            setCountShows(15);
            setActive(false);
          }}
        >
          15
        </li>
        <li
          onClick={() => {
            setCountShows(20);
            setActive(false);
          }}
        >
          20
        </li>
        <li
          onClick={() => {
            setCountShows(25);
            setActive(false);
          }}
        >
          25
        </li>
        <li
          onClick={() => {
            setCountShows(50);
            setActive(false);
          }}
        >
          50
        </li>
      </ul>
    </div>
  );
};
