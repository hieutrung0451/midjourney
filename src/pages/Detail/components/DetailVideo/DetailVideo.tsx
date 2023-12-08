import React from 'react';
import { Card } from 'antd';

import Video from './Video';
import DetailInfo from './DetailInfo';

import styles from '../../styles/Detail.module.css';

interface Card {
  id?: number;
  title?: string;
  channel_name?: string;
  image?: string;
  channel_avatar?: string;
  dateNow: string;
  createAt: string;
  view?: string;
  videoTime?: string;
}

interface Props {
  card?: Card;
}

const DetailVideo = ({ card }: Props): React.JSX.Element => {
  return (
    <div className={styles.user}>
      <Video card={card} />
      <DetailInfo card={card} />
    </div>
  );
};

export default DetailVideo;
