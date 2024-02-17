import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { rollDice } from '../../utils/roll-dice';
import RollingDie from '../RollingDie';
import Die from '../Die';
import { XPContext } from '../../store/xp-context';

interface DoSkillModalProps {
    skillName: string;
    level: number;
    show: boolean;
    hide: () => void;
}

const DoSkillModal = ({ skillName, level, show, hide }: DoSkillModalProps) => {
    const { xp, addXP } = useContext(XPContext);
    const [rolled, setRolled] = useState(false);
    const [total, setTotal] = useState(0);
    const [pipsToMax, setPipsToMax] = useState(0);
    const [newSkillChecked, setNewSkillChecked] = useState(false);
    const [diceToRender, setDiceToRender] = useState<number[]>([]);

    const handleDiceRoll = () => {
        const { rolls, total, pipsToMax } = rollDice(level);
        setDiceToRender(rolls);
        setTotal(total);
        setPipsToMax(pipsToMax);
        if (pipsToMax === 0) {
            setNewSkillChecked(true);
        }
        setRolled(true);
    };

    const handleResetModal = () => {
        setDiceToRender([]);
        setNewSkillChecked(false);
        setRolled(false);
    };

    const handleFail = () => {
        if (!newSkillChecked) {
            addXP();
        }
        hide();
    };

    return (
        <Modal show={show} onHide={hide} onExited={handleResetModal}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {skillName} {level}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row className="justify-content-md-center" style={{ rowGap: 15 }}>
                        {rolled ? (
                            <>
                                {diceToRender.map((roll, index) => (
                                    <Col key={index} md="auto">
                                        <Die value={roll} />
                                    </Col>
                                ))}
                                <Row>
                                    <Col className="mx-auto" md="auto">
                                        <p className="h3">{total}</p>
                                    </Col>
                                </Row>
                            </>
                        ) : (
                            [...Array(level)].map((_, index) => (
                                <Col key={index} md="auto">
                                    <RollingDie />
                                </Col>
                            ))
                        )}
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                {rolled ? (
                    <div>
                        <div className="mb-3">
                            <Form.Check
                                id="new-skill-checkbox"
                                reverse
                                type={'checkbox'}
                                label={
                                    pipsToMax > xp
                                        ? `${pipsToMax} XP required for new skill.`
                                        : `Spend ${pipsToMax} XP for new skill?`
                                }
                                checked={newSkillChecked}
                                onChange={() => setNewSkillChecked(!newSkillChecked)}
                                disabled={pipsToMax === 0 || pipsToMax > xp}
                            />
                        </div>
                        <Button onClick={hide} variant="outline-warning">
                            Cancel
                        </Button>
                        <Button className="ms-3 me-3" variant="danger" onClick={handleFail}>
                            Fail
                        </Button>
                        <Button variant="success">Succeed</Button>
                    </div>
                ) : (
                    // Whole different view for buttons in case of Max roll?
                    <Button onClick={handleDiceRoll}>Roll</Button>
                )}
            </Modal.Footer>
        </Modal>
    );
};

export default DoSkillModal;
