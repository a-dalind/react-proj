import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from 'ui/widgets/Sidebar';

describe('Sidebar', () => {
    test('render sidebar', () => {
        render(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('test toggle', () => {
        render(<Sidebar />);
        const sidebarToggle = screen.getByTestId('sidebar-toggle');
        expect(sidebarToggle).toBeInTheDocument();
        fireEvent.click(sidebarToggle);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
