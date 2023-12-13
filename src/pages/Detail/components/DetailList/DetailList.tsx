import React, { useEffect } from 'react';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { fetchFilms } from '../../../../redux/slice/filmsSlice';
import { RootState } from '../../../../redux/store';

import styles from '../../styles/Detail.module.css';

// interface Card {
//   id?: number;
//   title?: string;
//   channel_name?: string;
//   image?: string;
//   channel_avatar?: string;
//   dateNow: string;
//   createAt: string;
//   view?: string;
//   videoTime?: string;
// }

function DetailList(): React.JSX.Element {
  const navigate = useNavigate();
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  return (
    <div className={styles.detailList}>
      {state.film.films.map((film) => (
        <Card
          className={styles.cardItem}
          cover={
            <img
              src='https://lofigirl.com/wp-content/uploads/2022/10/Hush.png'
              alt={film.title}
              style={{
                width: '146px',
                height: '108px',
                borderRadius: '0',
              }}
            />
          }
          hoverable
          onClick={() => navigate(`/detail/${film.episode_id}`)}
        >
          <div className={styles.cardInfo}>
            <p>{film.title}</p>
            <div className={styles.channelInfo}>
              <p>{film.director}</p>
              <div>
                <span>14.000 views </span>
                <span> - </span>
                <span>1 month ago</span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default DetailList;
