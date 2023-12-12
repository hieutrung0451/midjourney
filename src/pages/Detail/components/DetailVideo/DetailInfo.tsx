import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Card, Button, Avatar, Radio } from 'antd';
import {
  BellOutlined,
  LikeOutlined,
  DislikeOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';

import { fetchFilm } from '../../../../redux/slice/filmsSlice';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '../../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';

import { IFilm } from '../../../../types/schema';

import styles from '../../styles/Detail.module.css';

// interface Card {
//   id?: number;
//   title?: string;
//   channel_name?: string;
//   image?: string;
//   channel_avatar?: string;
//   dateNow: string;
//   createAt: string;
//   view?: string;
//   videoTime?: string;
// }

interface Props {
  film?: IFilm;
}

const DetailInfo = ({ film }: Props) => {
  const navigate = useNavigate();
  const state = useSelector((state: RootState) => state);

  useEffect(() => {
    console.log(state.film.film);
  });

  // const options = [
  //   { label: [<LikeOutlined />, ' 299'], value: '1' },
  //   { label: <DislikeOutlined />, value: '2' },
  //   { label: 'Share', value: '3' },
  //   { label: <EllipsisOutlined />, value: '4' },
  // ];

  // const calculatorDate = (dateNow: string, createAt: string) => {
  //   const date_Now: Date = new Date(dateNow);
  //   const create_At: Date = new Date(createAt);

  //   const month_Between = date_Now.getMonth() - create_At.getMonth();
  //   const year_Between = date_Now.getFullYear() - create_At.getFullYear();

  //   const result = month_Between + year_Between * 12;

  //   return result;
  // };

  return (
    <Row className={styles.infoContainer}>
      <Row style={{ width: '100%' }}>
        <Col>
          <h2>{film?.title}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Avatar
            src={
              <img
                src='https://upload.wikimedia.org/wikipedia/vi/2/23/Lofi_girl_logo.jpg'
                alt={film?.title}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            }
            onClick={() => navigate('/shorts')}
            style={{ cursor: 'pointer' }}
          />
        </Col>
        <Col className={styles.info}>
          <p>{film?.director}</p>
          <p>200k subscribers</p>
        </Col>

        <Col className={styles.btn}>
          <Button
            size='large'
            className={styles.subscribed}
            shape='round'
            icon={<BellOutlined />}
          >
            Subscribed
          </Button>
          {/* <Col>
            <Radio.Group
              options={options}
              optionType='button'
              style={{ marginTop: '6px' }}
            />
          </Col> */}
        </Col>
      </Row>

      <Col>
        <Row className={styles.desc}>
          <div>{film?.title} views </div>
          <div className={styles.between}> - </div>
          <div>1 month</div>
        </Row>

        <p className={styles.detail}>{film?.opening_crawl}</p>
      </Col>
      <Row>Show more</Row>
    </Row>
  );
};

export default DetailInfo;
