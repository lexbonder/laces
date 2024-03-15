import { render, screen } from '@testing-library/react';
import SkillButton from './SkillButton';
import userEvent from '@testing-library/user-event';

describe('SkillButton', () => {
    it.skip('should render a Skill Button', () => {
        const mockName = 'Do Anything';
        const mockLevel = 1;
        const mockOpenSkillModal = vi.fn();

        render(<SkillButton name={mockName} level={mockLevel} openSkillModal={mockOpenSkillModal} />);
    });

    it('should call openSkillModal when clicked', async () => {
        const mockName = 'Do Anything';
        const mockLevel = 1;
        const mockOpenSkillModal = vi.fn();

        render(<SkillButton name={mockName} level={mockLevel} openSkillModal={mockOpenSkillModal} />);

        await userEvent.click(screen.getByText(mockName));

        expect(mockOpenSkillModal).toHaveBeenCalledWith(mockName, mockLevel);
    });
});
