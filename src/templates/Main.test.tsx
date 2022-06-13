import { render, screen } from '@testing-library/react';

import { Main } from './Main';

describe('Main template', () => {
  describe('Render method', () => {
    it('should have menu item', () => {
      render(<Main meta={null}>{null}</Main>);

      const trendingMenu = screen.getByText(/Trending/);
      const productMenu = screen.getByText(/Products/);

      expect(trendingMenu).toBeInTheDocument();
      expect(productMenu).toBeInTheDocument();
    });
  });
});
