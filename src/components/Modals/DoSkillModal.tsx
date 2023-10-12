import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

interface DoSkillModalProps {
    skillName: string;
    level: number;
    xp: number;
    show: boolean;
    hide: () => void;
}

const DoSkillModal = ({ skillName, level, xp, show, hide }: DoSkillModalProps) => {
    const [rolled, setRolled] = useState(false);

    return (
        <Modal show={show} onHide={hide}>
            <Modal.Header closeButton>
                <Modal.Title>{skillName}</Modal.Title>
            </Modal.Header>
            <Modal.Body></Modal.Body>
            <Modal.Footer>
                {rolled ? (
                    <>
                        <Button onClick={hide} variant="outline-info">
                            Cancel
                        </Button>
                    </>
                ) : (
                    <></>
                )}
            </Modal.Footer>
        </Modal>
    );
};

export default DoSkillModal;
