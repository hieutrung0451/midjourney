import React, { useEffect } from 'react';

import { Layout, Flex, Spin, Alert } from 'antd';

import { useParams } from 'react-router-dom';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../redux/store';
import { fetchFilm } from '../../redux/slice/filmsSlice';

import styles from './styles/Detail.module.css';

import DetailList from './components/DetailList/DetailList';
import DetailVideo from './components/DetailVideo/DetailVideo';

function Detail(): React.JSX.Element {
  const { id } = useParams<{ id: string }>();
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    id && dispatch(fetchFilm(+id));
  }, []);

  return (
    <Layout>
      <Layout.Content className={styles.content}>
        <Flex className={styles.detailFlex}>
          <DetailVideo />

          <DetailList />
        </Flex>
      </Layout.Content>
    </Layout>
  );
}

export default Detail;
