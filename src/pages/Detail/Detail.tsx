import React from 'react';
import { Layout } from 'antd';

import styles from './styles/Detail.module.css';

const Detail = (): React.JSX.Element => {
  return (
    <Layout>
      <Layout.Content className={styles.content}>Detail</Layout.Content>
    </Layout>
  );
};

export default Detail;
