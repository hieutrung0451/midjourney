import React from 'react';
import { Card, Avatar, Flex, Space } from 'antd';

import styles from './CardItem.module.css';

import image1 from '../../../assets/img/Rectangle 394.png';
import logo from '../../../assets/img/logo1.jpg';

interface Props {
  title: string;
  channel_name: string;
  image: string;
  channel_avatar: string;
  date: string;
  view: string;
  videoTime: string;
}

function CardItem({
  title,
  channel_name,
  image,
  channel_avatar,
  date,
  view,
  videoTime,
}: Props): React.JSX.Element {
  return (
    <Card
      cover={<img src={image} alt='this is a cover' />}
      className={styles.card}
      bordered={false}
    >
      <Flex>
        <Avatar
          src={<img src={channel_avatar} alt='avatar' />}
          style={{ width: '16%', height: '38px' }}
        />
        <div className={styles.info}>
          <h4>{title}</h4>

          <div className={styles.userInfo}>
            <div>{channel_name}</div>
            <span>{view}</span>
            <span> - </span>
            <span>{date}</span>
          </div>
        </div>
      </Flex>
    </Card>
  );
}

export default CardItem;
