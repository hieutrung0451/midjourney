import { useEffect } from 'react';
import { Row, Col, Alert, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { fetchFilms } from '../../../../redux/slice/filmsSlice';
import { RootState } from '../../../../redux/store';

import Card from './Card/CardItem';

import { IFilm } from '../../../../types/schema';

import styles from './Card/CardItem.module.css';

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
      return card.title.trim().toLowerCase().includes(search.toLowerCase());
    }
    return card;
  };

  const filteredList = (cards: IFilm[], search: string) =>
    state.film.films.filter((card) => bySearch(card, search));

  return (
    <Row className={styles.cards}>
      {state.film.errorState && (
        <Alert
          message={state.film.error}
          type='error'
          style={{
            position: 'absolute',
            right: '32px',
            top: '164px',
          }}
          showIcon
          closable
        />
      )}
      {state.film.loading ? (
        <Spin
          indicator={<LoadingOutlined style={{ fontSize: 80 }} spin />}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
          }}
        />
      ) : (
        filteredList(state.film.films, search).map((film) => (
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
        ))
      )}
    </Row>
  );
}

export default Cards;
