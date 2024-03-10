import Button from 'react-bootstrap/Button';
import { IAddSkillButtonProps } from '../types';

const AddSkillButton = ({ showNewSkillModal }: IAddSkillButtonProps) => {
    return (
        <Button className="align-self-center me-3" onClick={showNewSkillModal}>
            Add Skill
        </Button>
    );
};

export default AddSkillButton;
