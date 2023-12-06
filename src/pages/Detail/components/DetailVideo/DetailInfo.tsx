import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Card, Button, Avatar, Radio } from 'antd';
import {
  BellOutlined,
  LikeOutlined,
  DislikeOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';

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

const DetailInfo = ({ card }: Props) => {
  const navigate = useNavigate();

  const options = [
    { label: [<LikeOutlined />, ' 299'], value: '1' },
    { label: <DislikeOutlined />, value: '2' },
    { label: 'Share', value: '3' },
    { label: <EllipsisOutlined />, value: '4' },
  ];

  const calculatorDate = (dateNow: string, createAt: string) => {
    const date_Now: Date = new Date(dateNow);
    const create_At: Date = new Date(createAt);

    const month_Between = date_Now.getMonth() - create_At.getMonth();
    const year_Between = date_Now.getFullYear() - create_At.getFullYear();

    const result = month_Between + year_Between * 12;

    return result;
  };

  return (
    <Row className={styles.infoContainer}>
      <Row style={{ width: '100%' }}>
        <Col>
          <h2>{card?.title}</h2>
        </Col>
      </Row>
      <Col>
        <Avatar
          src={
            <img
              src={card?.channel_avatar}
              alt={card?.title}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          }
          onClick={() => navigate('/shorts')}
          style={{ cursor: 'pointer' }}
        />
      </Col>
      <Row>
        <Col className={styles.info}>
          <p>{card?.channel_name}</p>
          <p>200k subscribers</p>
        </Col>
        <Col className={styles.btn}>
          <Button
            size='large'
            className={styles.subscribed}
            shape='round'
            icon={<BellOutlined />}
          >
            Subscribed
          </Button>
          <Col>
            <Radio.Group
              options={options}
              optionType='button'
              style={{ marginTop: '6px' }}
            />
          </Col>
        </Col>
      </Row>

      <Col>
        <Row className={styles.desc}>
          <div>{card?.view} views </div>
          <div className={styles.between}> - </div>
          <div>1 month</div>
        </Row>

        <p style={{ width: '77%' }} className={styles.detail}>
          Celestial Alignment is bringing you a calming and reassuring treatment
          with his latest release “Precious Moments”. Beautiful slow progressing
          guitars act as an aid to sooth your mind after a long day. Through the
          cold wilderness, you’ve finally found a warm refuge under the northern
          lights and night stars – come in and rest, you’ve earned it 😌
        </p>
      </Col>
      <Row>Show more</Row>
    </Row>
  );
};

export default DetailInfo;
