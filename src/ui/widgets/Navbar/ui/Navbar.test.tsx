import { screen } from '@testing-library/react';
import { renderWithTranslation } from 'lib/tests/renderWithTranslation/renderWithTranslation';
import { Navbar } from 'ui/widgets/Navbar';

describe('Navbar', () => {
    test('render navbar', () => {
        renderWithTranslation(<Navbar />);
        expect(screen.getByTestId('navbar')).toBeInTheDocument();
    });
});
