import React from 'react';
import { Menu } from 'antd';

import {
  HomeOutlined,
  PlaySquareOutlined,
  CameraOutlined,
  UnorderedListOutlined,
  TeamOutlined,
  UserOutlined,
  IdcardOutlined,
  RightOutlined,
} from '@ant-design/icons';

import styles from './ShortsBar.module.css';

const ShortsBar = () => {
  return (
    <Menu
      mode='horizontal'
      style={{ width: '100%', background: 'none' }}
      className={styles.shortsBar}
      inlineCollapsed={false}
    >
      <Menu.Item key='1' className={styles['nav-item']}>
        <HomeOutlined /> Home
      </Menu.Item>
      <Menu.Item key='2' className={styles['nav-item']}>
        <PlaySquareOutlined /> Video
      </Menu.Item>
      <Menu.Item key='3' className={styles['nav-item']}>
        <PlaySquareOutlined /> Shorts
      </Menu.Item>
      <Menu.Item key='4' className={styles['nav-item']}>
        <CameraOutlined /> Live
      </Menu.Item>
      <Menu.Item key='5' className={styles['nav-item']}>
        <UnorderedListOutlined /> Playlist
      </Menu.Item>
      <Menu.Item key='6' className={styles['nav-item']}>
        <TeamOutlined /> Community
      </Menu.Item>
      <Menu.Item key='7' className={styles['nav-item']}>
        <UserOutlined /> Channel
      </Menu.Item>
      <Menu.Item key='8' className={styles['nav-item']}>
        <IdcardOutlined /> About
      </Menu.Item>
      <Menu.Item key='9' className={styles['nav-item']}>
        <RightOutlined />
      </Menu.Item>
    </Menu>
  );
};

export default ShortsBar;
