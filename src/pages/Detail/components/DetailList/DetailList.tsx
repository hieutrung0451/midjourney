import React, { useEffect } from 'react';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';

import Navbar from '../../../../layouts/Navbar/Navbar';

import styles from '../../styles/Detail.module.css';

interface Card {
  id?: number;
  title?: string;
  channel_name?: string;
  image?: string;
  channel_avatar?: string;
  dateNow: string;
  createAt: string;
  view?: string;
  videoTime?: string;
}

interface Props {
  cards: Card[];
}

const DetailList = ({ cards }: Props): React.JSX.Element => {
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
      {cards.map((card) => (
        <Card
          className={styles.cardItem}
          cover={
            <img
              src={card.image}
              alt={card.title}
              style={{
                width: '146px',
                height: '108px',
                borderRadius: '0',
              }}
            />
          }
          hoverable
          onClick={() => navigate(`/detail/${card.id}`)}
        >
          <div className={styles.videoTime}>{card.videoTime}</div>
          <div className={styles.cardInfo}>
            <p>{card.title}</p>
            <div className={styles.channelInfo}>
              <p>{card.channel_name}</p>
              <div>
                <span>{card.view} views </span>
                <span> - </span>
                <span>
                  {calculatorDate(card.dateNow, card.createAt)} month ago
                </span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default DetailList;
