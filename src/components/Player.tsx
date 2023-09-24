import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import XPModal from './XPModal';

interface IPlayer {
  name: string;
}

function Player({ name }: IPlayer) {
  const [xp, setXP] = useState(0);
  const [showingXPModal, setShowingXPModal] = useState(false);

  const addXP = () => {
    setXP(xp + 1);
  }

  const reduceXP = () => {
    if (xp > 0) {
      setXP(xp - 1)
    }
  }

  const toggleXPModal = () => {
    setShowingXPModal(!showingXPModal);
  }

  return (
    <Row className='border-bottom border-dark'>
      <Col>
        <h1>{name}</h1>
      </Col>
      <Col>
        <Button className='float-end' onClick={toggleXPModal}>
          XP: {xp}
        </Button>
      </Col>
      <XPModal xp={xp} show={showingXPModal} hide={toggleXPModal} />
    </Row>
  )
}

export default Player;