import { render, screen } from '@testing-library/react';

import Index from '@/pages/index';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('Index page', () => {
  describe('Render method', () => {
    it('should Main Content', () => {
      render(<Index />);

      const paragraph = screen.getByText(/Main Content/);

      expect(paragraph).toBeInTheDocument();
    });
  });
});
