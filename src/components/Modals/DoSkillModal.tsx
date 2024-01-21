import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { rollDice } from '../../utils/roll-dice';
import RollingDie from '../RollingDie';
import Die from '../Die';

interface DoSkillModalProps {
    skillName: string;
    level: number;
    show: boolean;
    hide: () => void;
}

const DoSkillModal = ({ skillName, level, show, hide }: DoSkillModalProps) => {
    const [rolled, setRolled] = useState(false);
    const [diceToRender, setDiceToRender] = useState<number[]>([]);

    const handleDiceRoll = () => {
        const diceRolls = rollDice(level);
        setDiceToRender(diceRolls);
        setRolled(true);
    };

    const handleResetModal = () => {
        setDiceToRender([]);
        setRolled(false);
    };

    return (
        <Modal show={show} onExited={handleResetModal}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {skillName} {level}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {rolled
                    ? diceToRender.map((roll, index) => <Die key={index} value={roll} />)
                    : [...Array(level)].map((_, index) => <RollingDie key={index} />)}
            </Modal.Body>
            <Modal.Footer>
                {rolled ? (
                    <>
                        <div>
                            <Form.Check type="switch" label="Gain new skill" />
                        </div>
                        <div>
                            <Button onClick={hide} variant="outline-warning">
                                Cancel
                            </Button>
                            <Button variant="danger">Fail (+1 XP)</Button>
                            <Button variant="success">Pass</Button>
                        </div>
                    </>
                ) : (
                    <Button onClick={handleDiceRoll}>Roll</Button>
                )}
            </Modal.Footer>
        </Modal>
    );
};

export default DoSkillModal;
