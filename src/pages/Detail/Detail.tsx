import React, { useState, useEffect } from 'react';
import { Layout, Row, Col, Avatar, Button, Flex, Card, Radio } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';
import {
  BellOutlined,
  LikeOutlined,
  DislikeOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';

import DetailVideo from './DetailVideo/DetailVideo';
import DetailList from './DetailList/DetailList';

import styles from './styles/Detail.module.css';

interface Card {
  id?: number;
  title?: string;
  channel_name?: string;
  image?: string;
  channel_avatar?: string;
  dateNow: string;
  createAt: string;
  view?: string;
  videoTime?: string;
}

interface Props {
  cards: Card[];

  getParams: (id: string) => void;
}

const Detail = ({ cards, getParams }: Props): React.JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const [card, setCard] = useState<Card>();

  useEffect(() => {
    id && setCard(findCardsElementById(cards, +id));
    id && getParams(id);
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
          <DetailVideo card={card} />
          <DetailList cards={cards} />
        </Flex>
      </Layout.Content>
    </Layout>
  );
};

export default Detail;
