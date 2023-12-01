import React from 'react';
import { Card, Avatar, Flex, Space } from 'antd';

import styles from './CardItem.module.css';

import image1 from '../../../assets/img/Rectangle 394.png';
import logo from '../../../assets/img/logo1.jpg';

function CardItem() {
  return (
    <Card
      cover={<img src={image1} alt='this is a cover' />}
      className={styles.card}
      bordered={false}
    >
      <Flex justify='space-between'>
        <Avatar
          src={<img src={logo} alt='avatar' />}
          style={{ width: '60px' }}
        />
        <div className={styles.info}>
          <h4>Design and Prototype an App with Play - Full 3-hour Course</h4>
          <div>DESIGNCODE</div>
          <div>
            <span>14k views</span>
            <span> - </span>
            <span>1 month age</span>
          </div>
        </div>
      </Flex>
    </Card>
  );
}

export default CardItem;
