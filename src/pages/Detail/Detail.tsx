import React, { useState, useEffect } from 'react';
import { Layout, Row, Col, Avatar, Button, Flex, Card } from 'antd';
import { useParams } from 'react-router-dom';

import styles from './styles/Detail.module.css';

interface Card {
  id?: number;
  title?: string;
  channel_name?: string;
  image?: string;
  channel_avatar?: string;
  dateNow?: string;
  createAt?: string;
  view?: string;
  videoTime?: string;
}

interface Props {
  cards: Card[];
}

const Detail = ({ cards }: Props): React.JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const [card, setCard] = useState<Card>();

  useEffect(() => {
    id && setCard(findCardsElementById(cards, +id));
  }, [id, cards]);

  const findCardsElementById = (cards: Card[], id: number) => {
    return cards.find((card) => {
      return card.id === id;
    });
  };

  return (
    <Layout>
      <Layout.Content className={styles.content}>
        <Flex>
          <div className={styles.user}>
            <Row>
              <Col>
                <img src={card?.image} alt='video' />
              </Col>
            </Row>
            <Row>
              <Col>
                <h2>{card?.title}</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <Avatar
                  src={
                    <img
                      src={card?.channel_avatar}
                      alt={card?.title}
                      style={{ width: '100%', height: '100%' }}
                    />
                  }
                />
              </Col>
              <Col className={styles.info}>
                <p>{card?.channel_name}</p>
                <p>200k subscribers</p>
              </Col>
              <Col className={styles.btn}>
                <Button size='large'>Subscribed</Button>
              </Col>
            </Row>
            <Col>
              <Row className={styles.desc}>
                <div>{card?.view} views </div>
                <div className={styles.between}> - </div>
                <div> 1 month ago</div>
              </Row>

              <p style={{ width: '77%' }} className={styles.detail}>
                Celestial Alignment is bringing you a calming and reassuring
                treatment with his latest release “Precious Moments”. Beautiful
                slow progressing guitars act as an aid to sooth your mind after
                a long day. Through the cold wilderness, you’ve finally found a
                warm refuge under the northern lights and night stars – come in
                and rest, you’ve earned it 😌
              </p>
            </Col>
            <Row>Show more</Row>
          </div>
          <div style={{ width: '100%', marginRight: '26px' }}>
            {cards.map((card) => (
              <Card
                className={styles.cardItem}
                cover={
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{
                      width: '146px',
                      height: '108px',
                      borderRadius: '0',
                    }}
                  />
                }
                hoverable
              >
                <div className={styles.cardInfo}>
                  <p>{card.title}</p>
                  <div className={styles.channelInfo}>
                    <p>{card.channel_name}</p>
                    <div>{card.view} views </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Flex>
      </Layout.Content>
    </Layout>
  );
};

export default Detail;
