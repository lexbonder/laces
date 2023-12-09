import { ChangeEvent, useState, KeyboardEvent, useContext } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import XPModal from './Modals/XPModal';
import { XPContext } from '../store/xp-context';

function Player() {
    const { xp } = useContext(XPContext);
    const [characterName, setCharacterName] = useState('Con Johnstantine');
    const [showingXPModal, setShowingXPModal] = useState(false);
    const [editingName, setEditingName] = useState(false);

    const toggleEditingName = () => {
        setEditingName(!editingName);
    };

    const toggleXPModal = () => {
        setShowingXPModal(!showingXPModal);
    };

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCharacterName(e.target.value);
    };

    const preventReload = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            toggleEditingName();
        }
    };

    return (
        <Row className="border-bottom border-dark pb-2">
            <Col className="d-flex flex-column">
                <Form>
                    <Form.Group className="mb-3" controlId="playerName">
                        <Form.Label>
                            Character Name
                            <Button variant="none btn-sm" aria-label="Edit character name" onClick={toggleEditingName}>
                                <i className={editingName ? 'bi bi-check-square' : 'bi bi-pencil-square'}></i>
                            </Button>
                        </Form.Label>
                        {editingName ? (
                            <Form.Control
                                type="text"
                                placeholder="Tom Bombadil"
                                value={characterName}
                                onChange={handleNameChange}
                                onBlur={toggleEditingName}
                                onKeyDown={preventReload}
                            />
                        ) : (
                            <Form.Text as="div">
                                <h3>{characterName}</h3>
                            </Form.Text>
                        )}
                    </Form.Group>
                </Form>
            </Col>
            <Col className="d-flex justify-content-end">
                <Button className="align-self-center" onClick={toggleXPModal}>
                    XP: {xp}
                </Button>
            </Col>
            <XPModal show={showingXPModal} hide={toggleXPModal} />
        </Row>
    );
}

export default Player;
