import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import pencil from '../assets/pencil.png';
import plant from '../assets/plant.png';
import picture from '../assets/picture.png';


const Header = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={6} md={4}>
            <img id={pencil} style={{height: 50}}/>
          </Col>
          </Row>
          <Row>
          <Col md={6} md={4}>
            <img src={plant} style={{height: 50}} />
          </Col>
          </Row>
          <Row>
          <Col md={6} md={4}>
            <img src={picture} style={{height: 50}}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
