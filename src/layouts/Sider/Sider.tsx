import React from 'react';
import { Menu, MenuProps } from 'antd';
import { IoHome } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { CiYoutube } from 'react-icons/ci';
import {
  HistoryOutlined,
  ClockCircleOutlined,
  DownloadOutlined,
  UnorderedListOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import { IoIosArrowDown } from 'react-icons/io';
import {
  MdOutlineVideoLibrary,
  MdOutlineSubscriptions,
  MdMusicVideo,
} from 'react-icons/md';

import styles from './styles/Sider.module.css';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
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
  getItem(null, 'menu', null, [
    getItem('Home', 'home', [
      <IoHome style={{ marginRight: '10px' }} />,
      <Link to="/" />,
    ]),
    getItem('Shorts', 'shorts', [
      <CiYoutube style={{ marginRight: '10px' }} />,
      <Link to="./shorts" />,
    ]),
    getItem('Subscriptions', 'subscriptions', <MdOutlineSubscriptions />),
    getItem('Papaya Music', 'music', <MdMusicVideo />),
    getItem(
      'MY CHANNEL',
      'g1',
      null,
      [
        getItem('Library', 'library', <MdOutlineVideoLibrary />),
        getItem('History', 'history', <HistoryOutlined />),
        getItem('Your Videos', 'yourVideos', <YoutubeOutlined />),
        getItem('Watch Later', 'watchLater', <ClockCircleOutlined />),
        getItem('Downloads', 'downloads', <DownloadOutlined />),
        getItem('Show More', 'showMore', <IoIosArrowDown />),
      ],
      'group',
    ),
    getItem(
      'SUBSCRIPTIONS',
      'g2',
      null,
      [
        getItem('DesignCode', 'designCode', null),
        getItem('Figma', 'figma', null),
        getItem('Sketch', 'sketch', null),
        getItem('spline', 'spline', null),
      ],
      'group',
    ),
  ]),
];

function Sider(): React.JSX.Element {
  return (
    <div className={styles.sider}>
      <Menu
        expandIcon={<UnorderedListOutlined />}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
        theme="dark"
        className={styles.menu}
      />
    </div>
  );
}

// const Sider = (): React.JSX.Element => {
//   return (
//     <Dropdown menu={{ items }} trigger={['click']}>
//       <a onClick={(e) => e.preventDefault()}>
//         <Space>
//           Click me
//           <DownOutlined />
//         </Space>
//       </a>
//     </Dropdown>
//   );
// };

export default Sider;
