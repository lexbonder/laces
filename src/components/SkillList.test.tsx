import { render } from '@testing-library/react';
import SkillList from './SkillList';

describe('SkillList', () => {
    it('should render a SkillList component', () => {
        const mockOpenSkillModal = vi.fn();

        render(<SkillList openSkillModal={mockOpenSkillModal} />);
    });
});
