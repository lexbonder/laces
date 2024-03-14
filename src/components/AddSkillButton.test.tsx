import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddSkillButton from './AddSkillButton';

describe('AddSkillButton', () => {
    it('renders the AddSkillButton component', () => {
        const mockShowNewSkillModal = vi.fn();
        render(<AddSkillButton showNewSkillModal={mockShowNewSkillModal} />);

        expect(screen).toMatchSnapshot();
    });

    it('calls showNewSkillModal when clicked', async () => {
        const mockShowNewSkillModal = vi.fn();
        render(<AddSkillButton showNewSkillModal={mockShowNewSkillModal} />);

        await userEvent.click(screen.getByText('Add Skill'));

        expect(mockShowNewSkillModal).toHaveBeenCalledOnce();
    });
});
