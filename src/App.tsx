import React, { useState, useEffect } from 'react';

import { Layout } from 'antd';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import DATA from './data/data.json';

import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import Shorts from './pages/Shorts/Shorts';

import styles from './App.module.css';

import { ICard } from './types/schema';

import Sider from './layouts/Sider/Sider';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';

const App = (): React.JSX.Element => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [search, setSearch] = useState<string>('');
  const { pathname } = useLocation();
  const [idParams, setIdParams] = useState<string>();

  useEffect(() => {
    setCards(DATA);
  }, [cards]);

  const getParams = (id: string) => {
    setIdParams(id);
  };

  return (
    <Layout className={styles.container}>
      <Sider />
      <Layout>
        <Header onSearch={setSearch} />
        <Routes>
          <Route path='/' element={<Home cards={cards} search={search} />} />
          <Route
            path='/detail/:id'
            element={<Detail cards={cards} getParams={getParams} />}
          />
          <Route path='/shorts' element={<Shorts cards={cards} />} />
        </Routes>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default App;
