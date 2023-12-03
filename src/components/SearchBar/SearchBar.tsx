import { Input } from 'antd';

import styles from './styles/SearchBar.module.css';

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
