import React, { useState, useEffect } from 'react';
import { Card, Avatar, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';

import styles from './CardItem.module.css';

interface Props {
  id: number;
  title: string;
  channel_name: string;
  image: string;
  channel_avatar: string;
  dateNow: string;
  createAt: string;
  view: string;
  videoTime: string;
}

function CardItem({
  id,
  title,
  channel_name,
  image,
  channel_avatar,
  dateNow,
  createAt,
  view,
  videoTime,
}: Props): React.JSX.Element {
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
      cover={(
        <img
          src="https://lofigirl.com/wp-content/uploads/2022/10/Hush.png"
          alt="this is a cover"
        />
      )}
      className={styles.card}
      bordered={false}
      hoverable
      onClick={() => {
        navigate(`/detail/${id}`);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }}
    >
      {/* <div className={styles.videoTime}>4:00</div> */}
      <Flex>
        <Avatar
          src={(
            <img
              src="https://upload.wikimedia.org/wikipedia/vi/2/23/Lofi_girl_logo.jpg"
              alt="avatar"
            />
          )}
          style={{ width: '16%', height: '38%' }}
        />
        <div className={styles.info}>
          <h4>{title}</h4>
          <div className={styles.userInfo}>
            <div>{channel_name}</div>
            <span>100.000 views</span>
            <span> - </span>
            <span>2 month ago</span>
          </div>
        </div>
      </Flex>
    </Card>
  );
}

export default CardItem;
