import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddSkillButton from './AddSkillButton';

describe('AddSkillButton', () => {
    test('calls showNewSkillModal when clicked', async () => {
        const mockShowNewSkillModal = vi.fn();
        render(<AddSkillButton showNewSkillModal={mockShowNewSkillModal} />);

        await userEvent.click(screen.getByText('Add Skill'));

        expect(mockShowNewSkillModal).toHaveBeenCalledOnce();
    });
});
