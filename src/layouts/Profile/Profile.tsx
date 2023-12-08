import React, { useState } from 'react';
import { Button, Avatar, Space } from 'antd';
import { HiOutlineVideoCamera } from 'react-icons/hi2';
import { IoNotificationsOutline } from 'react-icons/io5';
import type { SizeType } from 'antd/es/config-provider/SizeContext';

import styles from './styles/Profile.module.css';

function Profile() {
  const [size, setSize] = useState<SizeType>('large');

  return (
    <Space size={[20, 16]} wrap>
      <div className={styles['btn-group']}>
        <Button
          type='text'
          icon={<HiOutlineVideoCamera color='#999999' size='24px' />}
          size={size}
        />
        <Button
          type='text'
          icon={<IoNotificationsOutline color='#999999' size='24px' />}
          size={size}
        />
      </div>

      <Avatar
        className={styles.avatar}
        icon={
          <img src='https://upload.wikimedia.org/wikipedia/vi/2/23/Lofi_girl_logo.jpg' />
        }
      >
        A
      </Avatar>
    </Space>
  );
}

export default Profile;
