import { useEffect, useState } from 'react';

import { Row, Col } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { fetchFilms } from '../../../../redux/slice/filmsSlice';
import { RootState } from '../../../../redux/store';

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
  search: string;
}

function Cards({ search }: Props): React.JSX.Element {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  useEffect(() => {
    dispatch(fetchFilms());
  }, []);

  const bySearch = (card: IFilm, search: string) => {
    if (search !== '') {
      return card.title.toLowerCase().includes(search.toLowerCase());
    }
    return card;
  };

  const filteredList = (cards: IFilm[], search: string) =>
    state.film.films.filter((card) => bySearch(card, search));

  return (
    <Row
      // style={{ marginRight: '0px', padding: '40px' }}
      // style={{ padding: '48px 12px 40px 65px' }}
      className={styles.cards}
    >
      {filteredList(state.film.films, search).map((film) => (
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
}

export default Cards;
