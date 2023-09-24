import Modal from 'react-bootstrap/Modal'

interface XPModalProps {
  xp: number;
  show: boolean;
  hide: () => void;
}

function XPModal({ xp, show, hide }: XPModalProps) {
  return (
    <Modal show={show} onHide={hide}>
      <Modal.Header>
        <Modal.Title>Manage XP</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Add or remove XP here
      </Modal.Body>
    </Modal>
  )
}

export default XPModal;