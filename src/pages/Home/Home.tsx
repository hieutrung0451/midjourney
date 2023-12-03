import React, { useState, useEffect } from 'react';
import { Layout, Space } from 'antd';

import DATA from '../../data/data.json';

import Sider from '../../components/Sider/Sider';
import Header from '../../components/Header/Header';
import Cards from '../../components/Cards/Cards';
import Footer from '../../components/Footer/Footer';

import styles from './Home.module.css';

interface Card {
  id: number;
  title: string;
  channel_name: string;
  image: string;
  channel_avatar: string;
  date: string;
  view: string;
  videoTime: string;
}

function Home() {
  const [cards, setCards] = useState<Card[]>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    setCards(DATA);
  }, [cards]);

  return (
    <Layout className={styles.home}>
      <Sider />
      <Layout>
        <Header onSearch={setSearch} />
        <Layout.Content className={styles.content}>
          <Cards cards={cards} search={search} />
        </Layout.Content>
        <Footer />
      </Layout>
    </Layout>
  );
}

export default Home;
