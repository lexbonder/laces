import { FC, useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import { INewSkillModalProps } from '../../types';
import { SkillContext } from '../../store/skill-context';

const NewSkillModal: FC<INewSkillModalProps> = ({ prevLevel, show, hide, resetActiveSkill }) => {
    const { addSkill } = useContext(SkillContext);
    const [skillName, setSkillName] = useState('');
    const [skillLevel, setSkillLevel] = useState(2);

    useEffect(() => {
        if (prevLevel) {
            setSkillLevel(prevLevel + 1);
        }
    }, []);

    const decrement = () => {
        if (skillLevel > 2) {
            setSkillLevel(skillLevel - 1);
        }
    };

    const increment = () => {
        setSkillLevel(skillLevel + 1);
    };

    const handleResetModal = () => {
        setSkillName('');
        setSkillLevel(2);
        resetActiveSkill();
    };

    const handleSubmit = () => {
        addSkill(skillName, skillLevel);
        hide();
    };

    return (
        <Modal show={show} onHide={hide} onExited={handleResetModal}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Skill</Modal.Title>
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
                    <InputGroup>
                        <Button variant="secondary" onClick={decrement} disabled={skillLevel <= 2 || !!prevLevel}>
                            -
                        </Button>
                        <Form.Control value={skillLevel} readOnly />
                        <Button variant="secondary" onClick={increment} disabled={!!prevLevel}>
                            +
                        </Button>
                    </InputGroup>
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
