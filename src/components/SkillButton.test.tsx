import { render, screen } from '@testing-library/react';
import SkillButton from './SkillButton';
import userEvent from '@testing-library/user-event';

describe('SkillButton', () => {
    it('should render a Skill Button', () => {
        const mockSkill = {
            name: 'Do Anything',
            level: 1,
            id: 'abcde',
        };
        const mockOpenSkillModal = vi.fn();

        render(<SkillButton skill={mockSkill} openSkillModal={mockOpenSkillModal} />);
    });

    it('should call openSkillModal when clicked', async () => {
        const mockSkill = {
            name: 'Do Anything',
            level: 1,
            id: 'bcdef',
        };
        const mockOpenSkillModal = vi.fn();

        render(<SkillButton skill={mockSkill} openSkillModal={mockOpenSkillModal} />);

        await userEvent.click(screen.getByText(mockSkill.name));

        expect(mockOpenSkillModal).toHaveBeenCalledWith(mockSkill);
    });
});
