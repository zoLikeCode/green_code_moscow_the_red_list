import React, { useState } from 'react';
import css from './BlockEditorRequests.module.css';
import { MapPinIcon } from '../../../assets/MapPinIcon';
import { PaperClipIcon } from '../../../assets/PaperClipIcon';
import { CancelIcon } from '../../../assets/CancelIcon';
import { AcceptIcon } from '../../../assets/AcceptIcon';
import { YesIcon } from '../../../assets/YesIcon';
import { UpdateRequests } from '../../../services/ApplicationsAPI';
import { PopupShowMaps } from '../popupShowMaps/PopupShowMaps';

export const BlockEditorRequests = ({
  active,
  numberRequests,
  redListID,
  date,
  animals,
  author,
  coord,
}) => {
  const [activeEditorMenu, setActiveEditorMenu] = useState(false);
  const [editNameAnimal, setEditNameAnimal] = useState(animals);
  const [activePopupMaps, setActivePopupMaps] = useState(false);

  return (
    <div>
      <PopupShowMaps active={activePopupMaps} setActive={setActivePopupMaps} coords={coord} />
      <div className={!active ? css.mainContainer : css.noActiveMainContainer}>
        <div className={activeEditorMenu ? css.editorMenu : css.noActiveEditorMenu} />
        <li className={css.numReqText}>{numberRequests}</li>
        <li className={css.dateText}>{date}</li>
        <li className={css.animalsText}>{animals}</li>
        <li className={css.authorText}>{author}</li>
        <li
          className={css.maps}
          onClick={() => {
            setActivePopupMaps(true);
          }}>
          <span>
            <MapPinIcon />
          </span>
          На карте
        </li>
        <li className={css.paperClip}>
          <span>
            <PaperClipIcon />
          </span>{' '}
          Смотреть фотографию
        </li>
        <li
          className={css.cancelIcon}
          onClick={() => {
            UpdateRequests(numberRequests, { status: false });
            window.location.reload();
          }}>
          <CancelIcon />
        </li>
        <li
          className={css.yesIcon}
          onClick={() => {
            UpdateRequests(numberRequests, { status: false });
            window.location.reload();
          }}>
          <YesIcon />
        </li>
        <li
          className={css.acceptIcon}
          onClick={() => {
            !active && setActiveEditorMenu(!activeEditorMenu);
          }}>
          <AcceptIcon />
        </li>
      </div>
      <div className={activeEditorMenu ? css.editorMenuContent : css.noEditorMenuContent}>
        <p className={css.editorMainText}>Редактирование данных</p>
        <form className={css.editorForm}>
          <input
            placeholder='Начните вводить верное название животного'
            className={css.inputForm}
            onChange={(e) => {
              setEditNameAnimal(e.target.value);
            }}
          />
        </form>
        <button
          className={css.editorButton}
          type='button'
          onClick={() => {
            UpdateRequests(redListID, { 'red_list.red_list_name': editNameAnimal });
            window.location.reload();
          }}>
          Сохранить и принять заявку
        </button>
      </div>
    </div>
  );
};
