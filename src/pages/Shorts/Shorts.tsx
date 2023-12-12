import React, { useEffect } from 'react';
import { Layout, Col, Row, Avatar, Button, Card } from 'antd';
import { CaretRightOutlined, BellOutlined } from '@ant-design/icons';

import ShortsBar from './components/ShortsBar/ShortsBar';
import MemberList from './components/MemberList/MemberList';
import ChannelVideo from './components/ChannelVideos/ChannelVideo';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilms } from '../../redux/slice/filmsSlice';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';

import { IFilm } from '../../types/schema';

import styles from './styles/Shorts.module.css';

// interface Card {
//   id: number;
//   title: string;
//   channel_name: string;
//   image: string;
//   channel_avatar: string;
//   dateNow: string;
//   createAt: string;
//   view: string;
//   videoTime: string;
// }

interface Props {
  films: IFilm[];
}

const Shorts = ({ films }: Props): React.JSX.Element => {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  return (
    <Layout>
      <Layout.Content className={styles.content}>
        <Row>
          <img
            src='https://lofigirl.com/wp-content/uploads/2022/10/Relief.png'
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
        <Row style={{ margin: '0 12px' }}>
          Videos
          <CaretRightOutlined style={{ margin: '0 12px', fontSize: '20px' }} />
          Play all
        </Row>
        <Row>
          <Col>
            <Row
              className='videos'
              style={{
                display: 'flex',
                flexWrap: 'nowrap',
                overflow: 'auto',
                padding: '0 60px',
              }}
            >
              {state.film.films.slice(0, 5).map((film) => (
                <ChannelVideo
                  key={film.episode_id}
                  id={film.episode_id}
                  title={film.title}
                  channel_name={film.director}
                  createAt={film.created}
                  dateNow={film.edited}
                  view={film.title}
                  image={film.title}
                  videoTime={film.created}
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
