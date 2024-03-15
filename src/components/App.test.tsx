import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('App', () => {
    test('renders the App title', () => {
        render(<App />);

        const title = screen.getByRole('heading', { name: 'Laces' });
        expect(title).toBeInTheDocument();
    });

    test('render the DoSkillModal', async () => {
        render(<App />);

        const doAnythingButton = screen.getByRole('button', { name: 'Do Anything' });
        await userEvent.click(doAnythingButton);

        const doSkillModal = screen.getByRole('dialog', { name: 'Do Anything 1' });
        expect(doSkillModal).toBeInTheDocument();

        const closeButton = screen.getByRole('button', { name: 'Close' });
        await userEvent.click(closeButton);

        expect(doSkillModal).not.toBeInTheDocument();
    });

    test('render the NewSkillModal', async () => {
        render(<App />);

        const newSkillButton = screen.getByRole('button', { name: 'Add Skill' });
        await userEvent.click(newSkillButton);

        const newSkillModal = screen.getByRole('dialog', { name: 'Add New Skill' });
        expect(newSkillModal).toBeInTheDocument();

        const closeButton = screen.getByRole('button', { name: 'Close' });
        await userEvent.click(closeButton);

        expect(newSkillModal).not.toBeInTheDocument();
    });

    test('render the ManageXPModal', async () => {
        render(<App />);

        const manageXPButton = screen.getByRole('button', { name: /xp:/i });
        await userEvent.click(manageXPButton);

        const xpModal = screen.getByRole('dialog', { name: 'Manage XP' });
        expect(xpModal).toBeInTheDocument();

        const closeButton = screen.getByRole('button', { name: 'Close' });
        await userEvent.click(closeButton);

        expect(xpModal).not.toBeInTheDocument();
    });
});
