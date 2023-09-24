import { ChangeEvent, useState, KeyboardEvent } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import XPModal from './Modals/XPModal';
import NameChangeModal from './Modals/NameChangeModal';

function Player() {
  const [characterName, setCharacterName] = useState("Con Johnstantine")
  const [xp, setXP] = useState(0);
  const [showingXPModal, setShowingXPModal] = useState(false);
  const [editingName, setEditingName] = useState(false);

  const addXP = () => {
    setXP(xp + 1);
  }

  const reduceXP = () => {
    if (xp > 0) {
      setXP(xp - 1)
    }
  }

  const toggleEditingName = () => {
    setEditingName(!editingName);
  }

  const toggleXPModal = () => {
    setShowingXPModal(!showingXPModal);
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCharacterName(e.target.value);
  }

  const preventReload = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      toggleEditingName();
    }
  }

  return (
    <Row className='border-bottom border-dark pb-2'>
      <Col className='d-flex flex-column'>
        <Form>
          <Form.Group className="mb-3" controlId="playerName">
            <Form.Label>
              Character Name
              <Button
                variant='none btn-sm'
                aria-label='Edit character name'
                onClick={toggleEditingName}
              >
                <i className={editingName ? "bi bi-check-square" : "bi bi-pencil-square"}></i>
              </Button>
            </Form.Label>
            {editingName ?
              <Form.Control
                type="text"
                placeholder="Tom Bombadil"
                value={characterName}
                onChange={handleNameChange}
                onBlur={toggleEditingName}
                onKeyDown={preventReload}
              />
              :
              <Form.Text as="div">
                <h3>{characterName}</h3>
              </Form.Text>
            }
          </Form.Group>
        </Form>
      </Col>
      <Col className='d-flex justify-content-end'>
        <Button className='align-self-center' onClick={toggleXPModal}>
          XP: {xp}
        </Button>
      </Col>
      <XPModal
        xp={xp}
        show={showingXPModal}
        hide={toggleXPModal}
        add={addXP}
        reduce={reduceXP}
      />
    </Row >
  )
}

export default Player;