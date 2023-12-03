import React from 'react';
import { Flex, Layout, Avatar } from 'antd';

import website from '../../assets/website.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';

import styles from './styles/Footer.module.css';

function Footer() {
  return (
    <Layout.Footer className={styles.footer}>
      <Flex style={{ float: 'right' }} gap='40px'>
        <Flex gap='8px' align='center'>
          <Avatar src={website} size={40} />
          <a href='https://designcode.io/web-app-ui-design'>DesignCode</a>
        </Flex>
        <Flex gap='8px' align='center'>
          <Avatar src={twitter} size={40} />
          <a href='https://twitter.com/aksonvady'>@aksonvady</a>
        </Flex>
        <Flex gap='8px' align='center'>
          <Avatar src={instagram} size={40} />
          <a href='https://www.instagram.com/aksondesign/'>@aksondesign</a>
        </Flex>
      </Flex>
    </Layout.Footer>
  );
}

export default Footer;
