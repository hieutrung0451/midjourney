import { Layout } from 'antd';

import Sider from 'antd/es/layout/Sider';
import Cards from '../../components/Cards/Cards';

import styles from './Home.module.css';

interface Card {
  id: number;
  title: string;
  channel_name: string;
  image: string;
  channel_avatar: string;
  dateNow: string;
  createAt: string;
  view: string;
  videoTime: string;
}

interface Props {
  cards: Card[];
  search: string;
}

const Home = ({ cards, search }: Props): React.JSX.Element => {
  return (
    <Layout.Content className={styles.content}>
      <Cards cards={cards} search={search} />
    </Layout.Content>
  );
};

export default Home;
