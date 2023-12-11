import React, { useState, useEffect } from 'react';
import { Card, Avatar, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';

import styles from './styles/ChannelVideo.module.css';

interface Props {
  id: number;
  title: string;
  channel_name: string;
  image: string;
  dateNow: string;
  createAt: string;
  view: string;
  videoTime: string;
}

const ChannelVideo = ({
  id,
  title,
  channel_name,
  image,
  dateNow,
  createAt,
  view,
  videoTime,
}: Props) => {
  const [monthBetween, setMonthBetween] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    calculatorDate();
  }, []);

  const calculatorDate = () => {
    const date_Now: Date = new Date(dateNow);
    const create_At: Date = new Date(createAt);

    const month_Between = date_Now.getMonth() - create_At.getMonth();
    const year_Between = date_Now.getFullYear() - create_At.getFullYear();

    const result = month_Between + year_Between * 12;

    setMonthBetween(result.toString());
  };
  return (
    <Card
      className={styles.channelVideo}
      cover={
        <img
          src='https://lofigirl.com/wp-content/uploads/2022/10/Hush.png'
          alt='this is video'
          className={styles.image}
        />
      }
      hoverable
      onClick={() => navigate(`/detail/${id}`)}
    >
      {/* <div className={styles.videoTime}>{videoTime}</div> */}
      <Flex>
        <div className={styles.info}>
          <h4>{title}</h4>
          <div>
            <div>{channel_name}</div>
            <span>{view}</span>
            <span> - </span>
            <span>{monthBetween} month ago</span>
          </div>
        </div>
      </Flex>
    </Card>
  );
};

export default ChannelVideo;
