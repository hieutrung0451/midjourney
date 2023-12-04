import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';

import DATA from './data/data.json';

import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import Shorts from './pages/Shorts/Shorts';
import Header from './components/Header/Header';
import Sider from './components/Sider/Sider';
import Footer from './components/Footer/Footer';

import styles from './App.module.css';

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

const App = (): React.JSX.Element => {
  const [cards, setCards] = useState<Card[]>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    setCards(DATA);
  }, [cards]);

  return (
    <Layout className={styles.container}>
      <Sider />
      <Layout>
        <Header onSearch={setSearch} />
        <Routes>
          <Route path='/' element={<Home cards={cards} search={search} />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/shorts' element={<Shorts />} />
        </Routes>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default App;
