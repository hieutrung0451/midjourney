import React, { useState, useEffect } from 'react';

import { Layout, Alert } from 'antd';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import Sider from './layouts/Sider/Sider';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';

import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import Shorts from './pages/Shorts/Shorts';

import { Films } from './services/filmApi';

import { IFilm } from './types/schema';

import styles from './App.module.css';

const App = (): React.JSX.Element => {
  const [films, setFilms] = useState<IFilm[]>([]);
  const [search, setSearch] = useState<string>('');
  const { pathname } = useLocation();
  const [idParams, setIdParams] = useState<string>();
  const [error, setError] = useState<string>('');
  const [errorState, setErrorState] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    Films.getFilms()
      .then((data) => {
        console.log(data.data.results);

        setFilms(data.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setErrorState(true);
        setError(err.message);
      });
  }, [Films]);

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
                loading={loading}
                error={error}
                errorState={errorState}
              />
            }
          />
          <Route
            path='/detail/:id'
            element={
              <Detail
                films={films}
                getParams={getParams}
                loading={loading}
                error={error}
                errorState={errorState}
              />
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
