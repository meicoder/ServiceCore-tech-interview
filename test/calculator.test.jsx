import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Calculator } from '../src/Calculator';

describe('Calculator', () => {
    afterEach(cleanup);
    it('should render Calculator component', () => {
        render(<Calculator />);
    });

    it('should render Calculator component with a title', () => {
        render(<Calculator />);
        screen.getByText('Calculator');
    });
    it('should render 5 rows of elements', () => {
        render(<Calculator />);
        const rows = screen.getAllByRole('row');
        expect(rows.length).toBe(5);
    });
});
