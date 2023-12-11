import React, { useState, useEffect } from 'react';

import { Layout, Flex, Spin, Alert } from 'antd';
import { useParams } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';

import { Films } from '../../services/filmApi';

import DetailList from './components/DetailList/DetailList';

import DetailVideo from './components/DetailVideo/DetailVideo';

import styles from './styles/Detail.module.css';

import { ICard } from '../../types/schema';
import { IFilm } from '../../types/schema';

interface Props {
  films: IFilm[];
  loading: boolean;
  error: string;
  errorState: boolean;

  getParams: (id: string) => void;
}

const Detail = ({
  films,
  getParams,
  loading,
  error,
  errorState,
}: Props): React.JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const [film, setFilm] = useState<IFilm>();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  // useEffect(() => {
  //   id && setCard(findCardsElementById(cards, +id));
  //   id && getParams(id);
  // }, [id, cards]);

  useEffect(() => {
    id &&
      Films.getFilm(+id)
        .then((data) => {
          // console.log(findCardsElementById(data, +id));

          // id && setCard(findCardsElementById(cards, +id));
          setFilm(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
  }, [id]);

  // const findCardsElementById = (cards: IFilm[], id: number) => {
  //   return cards.find((card) => {
  //     return card.episode_id === id;
  //   });
  // };

  return (
    <Layout>
      <Layout.Content className={styles.content}>
        <Flex className={styles.detailFlex}>
          <DetailVideo film={film} />
          {errorState && (
            <Alert
              message={error}
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
          {loading && (
            <Spin
              indicator={<LoadingOutlined style={{ fontSize: 80 }} spin />}
              style={{
                height: '50vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          )}
          <DetailList films={films} />
        </Flex>
      </Layout.Content>
    </Layout>
  );
};

export default Detail;
