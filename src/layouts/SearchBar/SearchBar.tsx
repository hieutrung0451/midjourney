import { useState } from 'react';
import { Input, Button } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import type { SizeType } from 'antd/es/config-provider/SizeContext';

import styles from './styles/SearchBar.module.css';

interface Props {
  visible: boolean;
  onSearch: (filtered: string) => void;
}

function SearchBar({ onSearch, visible }: Props): React.JSX.Element {
  const [size, setSize] = useState<SizeType>('middle');

  return (
    <div className={styles.container}>
      <Input
        type="search"
        className={styles['input-search']}
        style={{ color: '#fff' }}
        placeholder="Explore"
        onChange={(e) => onSearch(e.target.value)}
      />
      <Button
        shape="circle"
        icon={<AudioOutlined />}
        size={size}
        className={styles.mic}
      />
      {/* {visible && (
        <ul
          style={{
            position: 'absolute',
            top: '54px',
            width: '100%',
            backgroundColor: 'red',
            zIndex: '1',
          }}
        >
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      )} */}
    </div>
  );
}

export default SearchBar;
