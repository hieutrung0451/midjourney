import React, { useEffect } from 'react';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';

import { IFilm } from '../../../../types/schema';

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

interface Props {
  films: IFilm[];
}

const DetailList = ({ films }: Props): React.JSX.Element => {
  const navigate = useNavigate();

  const calculatorDate = (dateNow: string, createAt: string) => {
    const date_Now: Date = new Date(dateNow);
    const create_At: Date = new Date(createAt);

    const month_Between = date_Now.getMonth() - create_At.getMonth();
    const year_Between = date_Now.getFullYear() - create_At.getFullYear();

    const result = month_Between + year_Between * 12;

    return result;
  };

  return (
    <div className={styles.detailList}>
      {films.map((film) => (
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
          {/* <div className={styles.videoTime}>{card.created}</div> */}
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
};

export default DetailList;
