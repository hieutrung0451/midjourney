import { Row, Col } from 'antd';

import Card from './Card/CardItem';

interface Card {
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

interface Props {
  cards: Card[];
  search: string;
}

const Cards = ({ cards, search }: Props): React.JSX.Element => {
  const bySearch = (card: Card, search: string) => {
    if (search !== '') {
      return card.title.toLowerCase().includes(search.toLowerCase());
    } else return card;
  };

  const filteredList = (cards: Card[], search: string) => {
    return cards.filter((card) => bySearch(card, search));
  };

  return (
    <Row gutter={[16, 16]} style={{ marginRight: '0px', padding: '40px' }}>
      {filteredList(cards, search).map((card) => (
        <Col span={8}>
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            channel_name={card.channel_name}
            channel_avatar={card.channel_avatar}
            createAt={card.createAt}
            dateNow={card.dateNow}
            view={card.view}
            image={card.image}
            videoTime={card.videoTime}
          />
        </Col>
      ))}
    </Row>
  );
};

export default Cards;
