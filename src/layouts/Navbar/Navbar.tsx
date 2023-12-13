import React from 'react';
import { Menu } from 'antd';

import styles from './Navbar.module.css';

function Navbar() {
  return (
    <Menu
      mode="horizontal"
      style={{ width: '100%', background: 'none' }}
      className={styles.navbar}
      inlineCollapsed={false}
    >
      <Menu.Item key="1" className={styles['nav-item']}>
        All
      </Menu.Item>
      <Menu.Item key="2" className={styles['nav-item']}>
        Gaming
      </Menu.Item>
      <Menu.Item key="3" className={styles['nav-item']}>
        Thoughts
      </Menu.Item>
      <Menu.Item key="4" className={styles['nav-item']}>
        Music
      </Menu.Item>
      <Menu.Item key="5" className={styles['nav-item']}>
        Thrillers
      </Menu.Item>
      <Menu.Item key="6" className={styles['nav-item']}>
        Mixes
      </Menu.Item>
      <Menu.Item key="7" className={styles['nav-item']}>
        Avatar
      </Menu.Item>
      <Menu.Item key="8" className={styles['nav-item']}>
        Film criticisma
      </Menu.Item>
      <Menu.Item key="9" className={styles['nav-item']}>
        Korean dramas
      </Menu.Item>
      <Menu.Item key="10" className={styles['nav-item']}>
        Characters
      </Menu.Item>
      <Menu.Item key="11" className={styles['nav-item']}>
        Eating
      </Menu.Item>
    </Menu>
  );
}

export default Navbar;
