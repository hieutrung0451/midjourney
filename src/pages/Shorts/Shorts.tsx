import React from 'react';
import { Layout } from 'antd';

import styles from './styles/Shorts.module.css';

function Shorts() {
  return (
    <Layout>
      <Layout.Content className={styles.content}></Layout.Content>
    </Layout>
  );
}

export default Shorts;
