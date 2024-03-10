import Button from 'react-bootstrap/Button';
import { XPContext } from '../store/xp-context';
import { useContext, useState } from 'react';
import XPModal from './Modals/XPModal';

const ManageXPButton = () => {
    const { xp } = useContext(XPContext);
    const [showingXPModal, setShowingXPModal] = useState(false);

    const toggleXPModal = () => {
        setShowingXPModal(!showingXPModal);
    };

    return (
        <>
            <Button className="align-self-center" onClick={toggleXPModal}>
                XP: {xp}
            </Button>
            <XPModal show={showingXPModal} hide={toggleXPModal} />
        </>
    );
};

export default ManageXPButton;
