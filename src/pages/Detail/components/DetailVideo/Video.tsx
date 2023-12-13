import React from 'react';
import { Row, Col } from 'antd';

import styles from '../../styles/Detail.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '../../../../redux/store';

function Video() {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  return (
    <Row>
      <Col>
        <img
          src='https://lofigirl.com/wp-content/uploads/2022/10/Hush.png'
          alt={state?.film?.film?.title}
          className={styles.video}
        />
      </Col>
    </Row>
  );
}

export default Video;
