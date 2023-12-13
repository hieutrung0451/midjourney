import React from 'react';

import Video from './Video';
import DetailInfo from './DetailInfo';

import styles from '../../styles/Detail.module.css';


const DetailVideo = (): React.JSX.Element => {
  return (
    <div className={styles.user}>
      <Video  />
      <DetailInfo />
    </div>
  );
};

export default DetailVideo;
