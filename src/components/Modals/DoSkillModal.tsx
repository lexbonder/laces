import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { rollDice } from '../RollDice';
import * as dice from '../../assets';

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

    return (
        <Modal show={show} onHide={hide}>
            <Modal.Header closeButton>
                <Modal.Title>{skillName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {diceToRender.length ? (
                    diceToRender.map((roll) => {
                        const result = ('dice' + roll) as keyof typeof dice;
                        return <img src={dice[result]} width={40} />;
                    })
                ) : (
                    <span>Best of luck!</span>
                )}
            </Modal.Body>
            <Modal.Footer>
                {rolled ? (
                    <>
                        <Button onClick={hide} variant="outline-info">
                            Cancel
                        </Button>
                    </>
                ) : (
                    <Button onClick={handleDiceRoll}>Roll</Button>
                )}
            </Modal.Footer>
        </Modal>
    );
};

export default DoSkillModal;
