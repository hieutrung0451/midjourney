import React, { useState, useEffect } from 'react';

import { Layout, Flex } from 'antd';
import { useParams } from 'react-router-dom';

import DetailList from './components/DetailList/DetailList';

import DetailVideo from './components/DetailVideo/DetailVideo';

import styles from './styles/Detail.module.css';

import { ICard } from '../../types/schema';

interface Props {
  cards: ICard[];

  getParams: (id: string) => void;
}

const Detail = ({ cards, getParams }: Props): React.JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const [card, setCard] = useState<ICard>();

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    id && setCard(findCardsElementById(cards, +id));
    id && getParams(id);
  }, [id, cards]);

  const findCardsElementById = (cards: ICard[], id: number) => {
    return cards.find((card) => {
      return card.id === id;
    });
  };

  return (
    <Layout>
      <Layout.Content className={styles.content}>
        <Flex className={styles.detailFlex}>
          <DetailVideo card={card} />
          <DetailList cards={cards} />
        </Flex>
      </Layout.Content>
    </Layout>
  );
};

export default Detail;
