import { useState } from 'react';
import { Input, Button } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import type { SizeType } from 'antd/es/config-provider/SizeContext';

import styles from './styles/SearchBar.module.css';

interface Props {
  onSearch: (filtered: string) => void;
}

const SearchBar = ({ onSearch }: Props): React.JSX.Element => {
  const [size, setSize] = useState<SizeType>('middle');

  return (
    <div className={styles.container}>
      <Input
        type='search'
        className={styles['input-search']}
        style={{ color: '#fff' }}
        placeholder='Explore'
        onChange={(e) => onSearch(e.target.value)}
      />
      <Button
        shape='circle'
        icon={<AudioOutlined />}
        size={size}
        className={styles.mic}
      />
    </div>
  );
};

export default SearchBar;
