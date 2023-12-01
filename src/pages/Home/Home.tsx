import React from 'react';
import { Layout, Space } from 'antd';

import Sider from '../../components/Sider/Sider';
import Header from '../../components/Header/Header';
import Cards from '../../components/Cards/Cards';
import Footer from '../../components/Footer/Footer';

import styles from './Home.module.css';

function Home() {
  return (
    <Layout className={styles.home}>
      <Sider />
      <Layout>
        <Header />
        <Layout.Content className={styles.content}>
          <Cards />
        </Layout.Content>
        <Footer />
      </Layout>
    </Layout>
  );
}

export default Home;
