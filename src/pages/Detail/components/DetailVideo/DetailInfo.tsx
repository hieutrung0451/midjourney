import { useNavigate } from 'react-router-dom';
import { Row, Col, Button, Avatar } from 'antd';
import { BellOutlined } from '@ant-design/icons';

import { RootState } from '../../../../redux/store';
import { useSelector } from 'react-redux';

import styles from '../../styles/Detail.module.css';

const DetailInfo = () => {
  const navigate = useNavigate();
  const state = useSelector((state: RootState) => state);

  return (
    <Row className={styles.infoContainer}>
      <Row style={{ width: '100%' }}>
        <Col>
          <h2>{state?.film?.film?.title}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Avatar
            src={
              <img
                src='https://upload.wikimedia.org/wikipedia/vi/2/23/Lofi_girl_logo.jpg'
                alt={state?.film?.film?.title}
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
          <p>{state?.film?.film?.director}</p>
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
        </Col>
      </Row>

      <Col className={styles.detail} style={{ height: '300px' }}>
        <Row className={styles.desc}>
          <div>120.000 views </div>
          <div className={styles.between}> - </div>
          <div>1 month</div>
        </Row>

        <p>{state?.film?.film?.opening_crawl}</p>
        <Row style={{ color: 'white', marginTop: '12px' }}>Show more</Row>
      </Col>
    </Row>
  );
};

export default DetailInfo;
