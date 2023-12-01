import React, { useState } from 'react';
import { Input, Space } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';

import styles from './styles/SearchBar.module.css';

function SearchBar() {
  const [size, setSize] = useState<SizeType>('large');

  return (
    <div className={styles.container}>
      <Input
        className={styles['input-search']}
        style={{ color: '#fff' }}
        placeholder='Explore'
      />
    </div>
  );
}

export default SearchBar;
