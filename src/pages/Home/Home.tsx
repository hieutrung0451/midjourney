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
  error: string;
  errorState: boolean;
  loading: boolean;
}

const Home = ({
  films,
  search,
  loading,
  error,
  errorState,
}: Props): React.JSX.Element => {
  return (
    <Layout.Content className={styles.content}>
      <Cards films={films} search={search} />
      {errorState && (
        <Alert
          message={error}
          type='error'
          style={{
            width: '23%',
            float: 'right',
            marginRight: '22px',
            marginTop: '24px',
          }}
          showIcon
          closable
        />
      )}

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
