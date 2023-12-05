import React from 'react';
import { Row, Col } from 'antd';

import '../styles/Detail.module.css';

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

const Video = ({ card }: Props) => {
  return (
    <Row>
      <Col>
        <img
          src={card?.image}
          alt='video'
          style={{ width: '838px', marginLeft: '22px' }}
        />
      </Col>
    </Row>
  );
};

export default Video;
