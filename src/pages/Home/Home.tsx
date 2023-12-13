import { Layout, Alert, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import Cards from './components/Cards/Cards';

import styles from './styles/Home.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface Props {
  search: string;
}

function Home({ search }: Props): React.JSX.Element {
  const state = useSelector((state: RootState) => state);

  return (
    <Layout.Content className={styles.content}>
      <Cards search={search} />
      {state.film.errorState && (
        <Alert
          message={state.film.error}
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

      {state.film.loading && (
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
}

export default Home;
