import { ChangeEvent, useState, KeyboardEvent } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';

const CharacterName = () => {
    const [characterName, setCharacterName] = useState('Con Johnstantine');
    const [editingName, setEditingName] = useState(false);

    const toggleEditingName = () => {
        setEditingName(!editingName);
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
        <Nav className="d-flex flex-column" style={{ flex: 1 }}>
            <div>
                Character Name
                <Button
                    variant="none btn-sm"
                    aria-label={editingName ? 'Save name' : 'Edit character name'}
                    onClick={toggleEditingName}
                >
                    <i className={editingName ? 'bi bi-check-square' : 'bi bi-pencil-square'} />
                </Button>
            </div>
            {editingName ? (
                <Form>
                    <Form.Group className="mb-3" controlId="CharacterName">
                        <Form.Control
                            type="text"
                            placeholder="Tom Bombadil"
                            value={characterName}
                            onChange={handleNameChange}
                            onBlur={toggleEditingName}
                            onKeyDown={preventReload}
                        />
                    </Form.Group>
                </Form>
            ) : (
                <h3 className="mb-0">{characterName}</h3>
            )}
        </Nav>
    );
};

export default CharacterName;
