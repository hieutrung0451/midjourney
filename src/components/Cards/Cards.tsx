import React from 'react';
import { Row, Col, Space } from 'antd';

import Card from './Card/CardItem';

function Cards() {
  return (
    <Row gutter={[16, 16]} style={{ marginRight: '0px', padding: '40px' }}>
      <Col span={8}>
        <Card />
      </Col>
      <Col span={8}>
        <Card />
      </Col>
      <Col span={8}>
        <Card />
      </Col>
      <Col span={8}>
        <Card />
      </Col>
      <Col span={8}>
        <Card />
      </Col>
      <Col span={8}>
        <Card />
      </Col>
    </Row>
  );
}

export default Cards;
