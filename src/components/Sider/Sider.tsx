import React, { useState } from 'react';
import { Layout, Menu, Button, MenuProps } from 'antd';
import { IoHome } from 'react-icons/io5';
import { CiYoutube } from 'react-icons/ci';
import {
  HistoryOutlined,
  ClockCircleOutlined,
  DownloadOutlined,
} from '@ant-design/icons';
import { IoIosArrowDown } from 'react-icons/io';
import {
  MdOutlineVideoLibrary,
  MdOutlineSubscriptions,
  MdMusicVideo,
} from 'react-icons/md';

import logo from '../../assets/Papaya.svg';

import styles from './styles/Sider.module.css';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem('Home', 'home', <IoHome />),
  getItem('Shorts', 'shorts', <CiYoutube />),
  getItem('Subscriptions', 'subscriptions', <MdOutlineSubscriptions />),
  getItem('Papaya Music', 'music', <MdMusicVideo />),
  getItem(
    'MY CHANNEL',
    'g1',
    null,
    [
      getItem('Library', 'library', <MdOutlineVideoLibrary />),
      getItem('History', 'history', <HistoryOutlined />),
      getItem('Your Videos', 'yourVideos'),
      getItem('Watch Later', 'watchLater', <ClockCircleOutlined />),
      getItem('Downloads', 'downloads', <DownloadOutlined />),
      getItem('Show More', 'showMore', <IoIosArrowDown />),
    ],
    'group'
  ),
  getItem(
    'SUBSCRIPTIONS',
    'g2',
    null,
    [
      getItem('DesignCode', 'designCode'),
      getItem('Figma', 'figma'),
      getItem('Sketch', 'sketch'),
      getItem('spline', 'spline'),
    ],
    'group'
  ),
];

// interface Props {
//   abc: string;
// }

// const Sider = ({ abc }: Props): React.JSX.Element => {

const Sider = (): React.JSX.Element => {
  return (
    <Layout.Sider className={styles.sider} style={{ background: '#1c1b33' }}>
      <img src={logo} alt='logo' />
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode='inline'
        items={items}
        theme='dark'
        className={styles.menu}
      />
    </Layout.Sider>
  );
};

export default Sider;
