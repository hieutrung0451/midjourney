import React from 'react';
import { Avatar, Flex, Button } from 'antd';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';

import styles from './styles/MemberList.module.css';

const MemberList = () => {
  return (
    <Flex justify='space-around' gap={40} className={styles.memberList}>
      <div>
        <h4>Our members</h4>
        <p>Thank you channel members</p>
      </div>
      <div>
        <Avatar
          style={{ backgroundColor: '#87d068' }}
          className={styles.memberItem}
          icon={<UserOutlined />}
        />
        <Avatar
          style={{ backgroundColor: '#87d068' }}
          className={styles.memberItem}
          icon={<UserOutlined />}
        />
        <Avatar
          style={{ backgroundColor: '#87d068' }}
          className={styles.memberItem}
          icon={<UserOutlined />}
        />
        <Avatar
          style={{ backgroundColor: '#1677ff' }}
          className={styles.memberItem}
          icon={<AntDesignOutlined />}
        />
        <Avatar
          style={{ backgroundColor: '#1677ff' }}
          className={styles.memberItem}
          icon={<AntDesignOutlined />}
        />
        <Avatar
          style={{ backgroundColor: '#1677ff' }}
          className={styles.memberItem}
          icon={<AntDesignOutlined />}
        />
        <Button className={styles.join}>Join</Button>
      </div>
    </Flex>
  );
};

export default MemberList;
