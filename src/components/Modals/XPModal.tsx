import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

interface XPModalProps {
  xp: number;
  show: boolean;
  hide: () => void;
  add: () => void;
  reduce: () => void;
}

function XPModal({ xp, show, hide, add, reduce }: XPModalProps) {
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
        <Button onClick={reduce} variant='outline-warning'>-</Button>
        <Button onClick={add} variant='outline-success'>+</Button>
        <Button onClick={hide}>Done</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default XPModal;