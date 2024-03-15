import { render, screen } from '@testing-library/react';
import CharacterName from './CharacterName';
import userEvent from '@testing-library/user-event';

describe('CharacterName', () => {
    test('renders character name label', () => {
        render(<CharacterName />);

        const characterNameLabel = screen.getByText('Character Name');
        expect(characterNameLabel).toBeInTheDocument();
    });

    test('edit character name flow', async () => {
        render(<CharacterName />);

        const editButton = screen.getByRole('button', { name: /edit/i });
        expect(editButton).toBeInTheDocument();

        const characterName = screen.getByRole('heading', { name: /con/i });
        expect(characterName).toBeInTheDocument();

        await userEvent.click(editButton);

        const saveButton = screen.getByRole('button', { name: /save/i });
        expect(saveButton).toBeInTheDocument();

        const form = screen.getByRole('textbox');
        expect(form).toBeInTheDocument();
    });
});
