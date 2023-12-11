import React from 'react';
import { Row, Col } from 'antd';

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

const Video = ({ film }: Props) => {
  return (
    <Row>
      <Col>
        <img
          src='https://lofigirl.com/wp-content/uploads/2022/10/Hush.png'
          alt={film?.title}
          className={styles.video}
        />
      </Col>
    </Row>
  );
};

export default Video;
