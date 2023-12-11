import { Layout, Alert, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import Cards from './components/Cards/Cards';

import { IFilm } from '../../types/schema';

import styles from './styles/Home.module.css';

// interface Card {
//   id: number;
//   title: string;
//   channel_name: string;
//   image: string;
//   channel_avatar: string;
//   dateNow: string;
//   createAt: string;
//   view: string;
//   videoTime: string;
// }

interface Props {
  films: IFilm[];
  search: string;
  error: boolean;
  loading: boolean;
}

const Home = ({ films, search, error, loading }: Props): React.JSX.Element => {
  return (
    <Layout.Content className={styles.content}>
      {error && <Alert message='Error Text' type='error' />}
      <Cards films={films} search={search} />

      {loading && (
        <Spin
          indicator={<LoadingOutlined style={{ fontSize: 80 }} spin />}
          style={{
            height: '50vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      )}
    </Layout.Content>
  );
};

export default Home;
