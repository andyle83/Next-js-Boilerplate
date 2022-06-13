import { render, screen } from '@testing-library/react';

import { Main } from './Main';

describe('Main template', () => {
  describe('Render method', () => {
    it('should have navigation', async () => {
      render(<Main meta={null}>{null}</Main>);
      // eslint-disable-next-line testing-library/no-await-sync-query
      const navigation = await screen.getByRole('navigation');
      expect(navigation).toBeInTheDocument();
    });

    it('should have footer', async () => {
      render(<Main meta={null}>{null}</Main>);
      // eslint-disable-next-line testing-library/no-await-sync-query
      const footer = await screen.getByRole('contentinfo');
      expect(footer).toBeInTheDocument();
    });
  });
});
