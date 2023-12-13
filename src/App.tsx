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

import styles from './App.module.css';

function App(): React.JSX.Element {
  const [search, setSearch] = useState<string>('');
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Layout className={styles.container}>
      <Sider />
      <Layout>
        <Header onSearch={setSearch} />
        <Routes>
          <Route path='/' element={<Home search={search} />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/shorts' element={<Shorts />} />
        </Routes>
        <Footer />
      </Layout>
    </Layout>
  );
}

export default App;
