import { render, screen } from '@testing-library/react';
import Die from './Die';

describe('Die', () => {
    test('renders a die component', () => {
        render(<Die value={3} />);

        const dieImage = screen.getByAltText('showing 3', { exact: false });
        expect(dieImage).toBeInTheDocument();
    });
});
