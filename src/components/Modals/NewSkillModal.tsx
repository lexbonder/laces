import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { INewSkillModalProps } from '../../types';

const NewSkillModal = ({ activeSkill, show, hide, resetActiveSkill }: INewSkillModalProps) => {
    const [skillName, setSkillName] = useState('');

    const handleResetModal = () => {
        setSkillName('');
        resetActiveSkill();
    };

    const handleSubmit = () => {
        activeSkill.addSkill(skillName);
        hide();
    };

    return (
        <Modal show={show} onHide={hide} onExited={handleResetModal} aria-labelledby="new-skill-modal-title">
            <Modal.Header closeButton>
                <Modal.Title id="new-skill-modal-title">Add New Skill</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="skillName">
                    <Form.Label>Skill Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="See if I have shoes on"
                        value={skillName}
                        onChange={(event) => setSkillName(event.target.value)}
                    />
                </Form.Group>
                <br />
                <Form.Group controlId="skillLevel">
                    <Form.Label>Skill Level</Form.Label>
                    <Form.Control value={activeSkill.level + 1} readOnly />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-secondary" onClick={hide}>
                    Cancel
                </Button>
                <Button variant="success" disabled={!skillName} onClick={handleSubmit}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default NewSkillModal;

/* Save for DM skill management (but also, maybe no case is needed for manual skill entry)

    useEffect(() => {
        if () {
            setSkillLevel(prevLevel + 1);
        }
    }, [prevLevel]);

    const decrement = () => {
        if (skillLevel > 2) {
            setSkillLevel(skillLevel - 1);
        }
    };

    const increment = () => {
        setSkillLevel(skillLevel + 1);
    };

    <InputGroup>
        <Button variant="secondary" onClick={decrement} disabled={skillLevel <= 2 || !!prevLevel}>
            -
        </Button>
        <Button variant="secondary" onClick={increment} disabled={!!prevLevel}>
            +
        </Button>
    </InputGroup>



*/
