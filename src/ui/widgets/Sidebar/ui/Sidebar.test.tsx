import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'ui/widgets/Sidebar';
import { componentRender } from 'lib/tests/componentRender/componentRender';

describe('Sidebar', () => {
    test('render sidebar', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('test toggle', () => {
        componentRender(<Sidebar />);
        const sidebarToggle = screen.getByTestId('sidebar-toggle');
        expect(sidebarToggle).toBeInTheDocument();
        fireEvent.click(sidebarToggle);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
