import React, { useEffect, useState } from 'react';
import css from './Processing.module.css';
import { InfoAboutProcessing } from '../../components/ui/infoAboutProcessing/InfoAboutProcessing';
import { BlockEditorRequests } from '../../components/ui/blockEditorRequests/BlockEditorRequests';
import { DownArray } from '../../assets/DownArray';
import { PopupShowMaps } from '../../components/ui/popupShowMaps/PopupShowMaps';
import { LoadRequests } from '../../services/ApplicationsAPI';

const Processing = () => {
  const [reviewRequest, setReviewRequeest] = useState(false);
  const [request, setRequestsList] = useState([]);

  useEffect(() => {
    LoadingRequests();
  }, []);

  const LoadingRequests = async () => {
    const response = await LoadRequests();
    setRequestsList(response);
  };

  return (
    <div>
      <InfoAboutProcessing />
      <p className={css.mainText}>Новые заявки</p>
      <div className={css.infoPanelContainer}>
        <ul>
          <li className={css.newReqText}>Номер заявки</li>
          <li className={css.dateText}>Дата</li>
          <li className={css.animalsText}>Животное</li>
          <li className={css.authorText}>Автор</li>
        </ul>
      </div>
      <div>
        {request !== undefined &&
          request
            .filter((req) => {
              return !req.active;
            })
            .map((req) => {
              return (
                <BlockEditorRequests
                  active={req.active}
                  numberRequests={req.application_id}
                  date={req.application_date.slice(0, 10)}
                  animals={
                    req.red_list.red_list_name.slice(0, 1).toUpperCase() +
                    req.red_list.red_list_name
                      .slice(1, req.red_list.red_list_name.length)
                      .toLowerCase()
                  }
                  author={req.user.user_name}
                  coord={[req.lat, req.long]}
                />
              );
            })}
      </div>
      <div className={css.reviewReq}>
        <p
          className={css.reqText}
          onClick={() => {
            setReviewRequeest(!reviewRequest);
          }}>
          Рассмотренные заявки
          <span>
            <DownArray />
          </span>
        </p>
        <div>
          {request !== undefined &&
            request
              .filter((req) => {
                return req.active;
              })
              .map((req) => {
                return (
                  <BlockEditorRequests
                    active={req.active}
                    numberRequests={req.application_id}
                    date={req.application_date.slice(0, 10)}
                    animals={req.animals}
                    author={req.author}
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default Processing;
