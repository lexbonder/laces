import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { XPContext } from '../store/xp-context';
import { IManageXPButtonProps } from '../types';

const ManageXPButton = ({ toggleXPModal }: IManageXPButtonProps) => {
    const { xp } = useContext(XPContext);

    return (
        <Button className="align-self-center" onClick={toggleXPModal}>
            XP: {xp}
        </Button>
    );
};

export default ManageXPButton;
