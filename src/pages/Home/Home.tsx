import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';

import DATA from '../../data/data.json';

import Header from '../../components/Header/Header';
import Cards from '../../components/Cards/Cards';

import styles from './Home.module.css';

interface Card {
  id: number;
  title: string;
  channel_name: string;
  image: string;
  channel_avatar: string;
  dateNow: string;
  createAt: string;
  view: string;
  videoTime: string;
}

interface Props {
  cards: Card[];
  search: string;
}

const Home = ({ cards, search }: Props) => {
  return (
    <Layout>
      <Layout.Content className={styles.content}>
        <Cards cards={cards} search={search} />
      </Layout.Content>
    </Layout>
  );
};

export default Home;
