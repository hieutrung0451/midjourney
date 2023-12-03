import React from 'react';
import { Layout, Flex } from 'antd';

import SearchBar from '../SearchBar/SearchBar';
import Profile from '../Profile/Profile';
import Navbar from '../Navbar/Navbar';

import styles from './styles/Header.module.css';

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
