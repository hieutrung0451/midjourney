import React from 'react';
import { Layout, Col, Row, Flex } from 'antd';

import SearchBar from '../SearchBar/SearchBar';
import Profile from '../Profile/Profile';
import Navbar from '../Navbar/Navbar';

import styles from './styles/Header.module.css';

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

interface Props {
  onSearch: (filtered: string) => void;
}

const Header = ({ onSearch }: Props): React.JSX.Element => {
  const handleSearch = (text: string) => {
    onSearch(text);
  };

  return (
    <Layout.Header className={styles.header}>
      <Flex className={styles.container} justify='space-between'>
        <SearchBar onSearch={handleSearch} />
        <Profile />
      </Flex>
      <Flex>
        <Navbar />
      </Flex>
    </Layout.Header>
  );
};

export default Header;
