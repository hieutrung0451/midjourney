import React from 'react';
import { Card } from 'antd';

import Video from './Video';
import DetailInfo from './DetailInfo';

import { IFilm } from '../../../../types/schema';

import styles from '../../styles/Detail.module.css';

// interface Card {
//   id?: number;
//   title?: string;
//   channel_name?: string;
//   image?: string;
//   channel_avatar?: string;
//   dateNow: string;
//   createAt: string;
//   view?: string;
//   videoTime?: string;
// }

interface Props {
  film?: IFilm;
}

const DetailVideo = ({ film }: Props): React.JSX.Element => {
  return (
    <div className={styles.user}>
      <Video film={film} />
      <DetailInfo film={film} />
    </div>
  );
};

export default DetailVideo;
