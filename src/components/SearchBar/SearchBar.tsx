import React, { useEffect, useState } from 'react';
import { Input, Space } from 'antd';

import data from '../../data/data.json';

import styles from './styles/SearchBar.module.css';

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

const SearchBar = ({ onSearch }: Props): React.JSX.Element => {
  return (
    <div className={styles.container}>
      <Input
        type='search'
        className={styles['input-search']}
        style={{ color: '#fff' }}
        placeholder='Explore'
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
