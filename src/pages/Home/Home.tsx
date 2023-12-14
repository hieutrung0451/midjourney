import { Layout } from 'antd';
import Cards from './components/Cards/Cards';
import styles from './styles/Home.module.css';

interface Props {
  search: string;
}

function Home({ search }: Props): React.JSX.Element {
  return (
    <Layout.Content className={styles.content}>
      <Cards search={search} />
    </Layout.Content>
  );
}

export default Home;
