import { render, screen } from '@testing-library/react';
import DoSkillModal from './DoSkillModal';
import userEvent from '@testing-library/user-event';

const mockProps = {
    activeSkill: {
        name: 'test my app',
        level: 3,
        id: 'abcdef',
    },
    show: true,
    hide: vi.fn(),
    openNewSkillModal: vi.fn(),
    resetActiveSkill: vi.fn(),
};

describe('non-max role result', () => {
    vi.mock('../../utils/roll-dice', () => ({
        rollDice: () => ({
            rolls: [1, 2, 3],
            total: 6,
            pipsToMax: 12,
        }),
    }));

    test('the correct number of dice display on screen', async () => {
        render(<DoSkillModal {...mockProps} />);

        const rollButton = screen.getByRole('button', { name: 'Roll' });
        expect(rollButton).toBeInTheDocument();

        await userEvent.click(rollButton);

        const diceImages = screen.getAllByRole('img', { name: /^Six sided dice showing/ });
        expect(diceImages).toHaveLength(3);
    });
});

describe('max roll result', () => {
    test('fail button disabled, checkbox checked and disabled', async () => {
        vi.mock('../../utils/roll-dice', () => ({
            rollDice: () => ({
                rolls: [6, 6, 6],
                total: 18,
                pipsToMax: 0,
            }),
        }));

        render(<DoSkillModal {...mockProps} />);

        const rollButton = screen.getByRole('button', { name: 'Roll' });
        expect(rollButton).toBeInTheDocument();

        await userEvent.click(rollButton);

        const failButton = screen.getByRole('button', { name: 'Fail' });
        expect(failButton).toBeDisabled();

        const newSkillCheckbox = screen.getByRole('checkbox');
        expect(newSkillCheckbox).toBeDisabled();
        expect(newSkillCheckbox).toBeChecked();
    });
});
