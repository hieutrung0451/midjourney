import React from 'react';
import { Row, Col, Card } from 'antd';
import {
  BellOutlined,
  LikeOutlined,
  DislikeOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';

import Video from './Video';
import DetailInfo from './DetailInfo';

import styles from '../styles/Detail.module.css';

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
      <Row>
        <Col>
          <h2>{card?.title}</h2>
        </Col>
      </Row>
      <DetailInfo card={card} />
    </div>
  );
};

export default DetailVideo;
