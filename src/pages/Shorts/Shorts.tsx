import React from 'react';
import { Layout, Col, Row, Avatar, Button, Card } from 'antd';
import { CaretRightOutlined, BellOutlined } from '@ant-design/icons';

import ShortsBar from './components/ShortsBar/ShortsBar';
import MemberList from './components/MemberList/MemberList';
import ChannelVideo from './components/ChannelVideos/ChannelVideo';

import styles from './styles/Shorts.module.css';

interface Card {
  id: number;
  title: string;
  channel_name: string;
  image: string;
  channel_avatar: string;
  dateNow: string;
  createAt: string;
  view: string;
  videoTime: string;
}

interface Props {
  cards: Card[];
}

const Shorts = ({ cards }: Props): React.JSX.Element => {
  return (
    <Layout>
      <Layout.Content className={styles.content}>
        <Row>
          <img
            src='https://lofigirl.com/wp-content/uploads/2022/11/Precious-Moments.png'
            alt='wallpaper'
            className={styles.wallpaper}
          />
        </Row>
        <Row className={styles['channel-info']}>
          <Col span={20}>
            <Row>
              <Col span={2}>
                <Avatar
                  size='large'
                  icon={
                    <img src='https://upload.wikimedia.org/wikipedia/vi/2/23/Lofi_girl_logo.jpg' />
                  }
                />
              </Col>
              <Col className={styles.user}>
                <h2>Lofi Girl</h2>
                <div style={{ color: '#ccc' }}>
                  <p>@lofigirl</p>
                  <p>200k Subscriptions</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col>
            <Button className={styles['sub-button']} icon={<BellOutlined />}>
              Subscribed
            </Button>
          </Col>
        </Row>
        <Row>
          <ShortsBar />
        </Row>
        <Row>
          <MemberList />
        </Row>
        <Row>
          Videos
          <CaretRightOutlined style={{ margin: '0 12px', fontSize: '20px' }} />
          Play all
        </Row>
        <Row>
          <Col>
            <Row
              className='videos'
              style={{ display: 'flex', flexWrap: 'nowrap', overflow: 'auto' }}
            >
              {cards.slice(0, 5).map((card) => (
                <ChannelVideo
                  id={card.id}
                  key={card.id}
                  title={card.title}
                  channel_name={card.channel_name}
                  view={card.view}
                  dateNow={card.dateNow}
                  createAt={card.createAt}
                  image={card.image}
                  videoTime={card.videoTime}
                />
              ))}
            </Row>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
};

export default Shorts;
