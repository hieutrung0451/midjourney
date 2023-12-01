import React from 'react';
import { Layout, Col, Row, Flex } from 'antd';

import SearchBar from '../SearchBar/SearchBar';
import Profile from '../Profile/Profile';
import Navbar from '../Navbar/Navbar';

import styles from './styles/Header.module.css';

function Header() {
  return (
    <Layout.Header className={styles.header}>
      <Flex className={styles.container} justify='space-between'>
        <SearchBar />
        <Profile />
      </Flex>
      <Flex>
        <Navbar />
      </Flex>
    </Layout.Header>
  );
}

export default Header;
