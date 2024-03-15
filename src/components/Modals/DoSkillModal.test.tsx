import { logRoles, render, screen } from '@testing-library/react';
import DoSkillModal from './DoSkillModal';

const mockProps = {
    skillName: 'test my app',
    level: 3,
    show: true,
    hide: vi.fn(),
    openNewSkillModal: vi.fn(),
    resetActiveSkill: vi.fn(),
};

test.skip('checkbox flow', () => {
    const { container } = render(<DoSkillModal {...mockProps} />);
    // logRoles(container);
});
