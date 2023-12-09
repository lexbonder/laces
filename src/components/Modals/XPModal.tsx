import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { XPContext } from '../../store/xp-context';

const XPModal = ({ show, hide }: XPModalProps) => {
    const { xp, addXP, reduceXP } = useContext(XPContext);

    return (
        <Modal show={show} onHide={hide}>
            <Modal.Header>
                <Modal.Title>Manage XP</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Add or remove XP here</p>
                <strong>{xp}</strong>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => reduceXP()} variant="outline-warning">
                    -
                </Button>
                <Button onClick={() => addXP()} variant="outline-success">
                    +
                </Button>
                <Button onClick={hide}>Done</Button>
            </Modal.Footer>
        </Modal>
    );
};

interface XPModalProps {
    show: boolean;
    hide: () => void;
}

export default XPModal;
