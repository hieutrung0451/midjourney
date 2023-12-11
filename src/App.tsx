import React, { useState, useEffect } from 'react';
import { Layout, Alert } from 'antd';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import { Films } from './services/api';

import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import Shorts from './pages/Shorts/Shorts';

import styles from './App.module.css';

import { IFilm } from './types/schema';
import { ICard } from './types/schema';

import Sider from './layouts/Sider/Sider';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';

const App = (): React.JSX.Element => {
  const [films, setFilms] = useState<IFilm[]>([]);
  const [search, setSearch] = useState<string>('');
  const { pathname } = useLocation();
  const [idParams, setIdParams] = useState<string>();
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    Films.getFilms()
      .then((data) => {
        setFilms(data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(!error);
      });

    // Films.getFilm(1)
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, [films, setFilms, loading]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const getParams = (id: string) => {
    setIdParams(id);
  };

  return (
    <Layout className={styles.container}>
      <Sider />
      <Layout>
        <Header onSearch={setSearch} />
        <Routes>
          <Route
            path='/'
            element={
              <Home
                films={films}
                search={search}
                error={error}
                loading={loading}
              />
            }
          />
          <Route
            path='/detail/:id'
            element={
              <Detail films={films} getParams={getParams} loading={loading} />
            }
          />
          <Route path='/shorts' element={<Shorts films={films} />} />
        </Routes>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default App;
