import { useEffect, useState } from 'react';

import { Row, Col } from 'antd';

import Card from './Card/CardItem';

import { IFilm } from '../../../../types/schema';

import styles from './Card/CardItem.module.css';

// interface Card {
//   id: number;
//   title: string;
//   channel_name: string;
//   image: string;
//   channel_avatar: string;
//   dateNow: string;
//   createAt: string;
//   view: string;
//   videoTime: string;
// }

interface Props {
  films: IFilm[];
  search: string;
}

const Cards = ({ films, search }: Props): React.JSX.Element => {
  const bySearch = (card: IFilm, search: string) => {
    if (search !== '') {
      return card.title.toLowerCase().includes(search.toLowerCase());
    } else return card;
  };

  const filteredList = (cards: IFilm[], search: string) => {
    return cards.filter((card) => bySearch(card, search));
  };

  return (
    <Row
      // style={{ marginRight: '0px', padding: '40px' }}
      // style={{ padding: '48px 12px 40px 65px' }}
      className={styles.cards}
    >
      {filteredList(films, search).map((film) => (
        <Col xs={24} xl={8} md={11} className={styles.card__item}>
          <Card
            key={film.episode_id}
            id={film.episode_id}
            title={film.title}
            channel_name={film.director}
            channel_avatar={film.director}
            createAt={film.created}
            dateNow={film.edited}
            view={film.title}
            image={film.title}
            videoTime={film.created}
          />
        </Col>
      ))}
    </Row>
  );
};

export default Cards;
