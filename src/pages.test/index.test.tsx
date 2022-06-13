import { render } from '@testing-library/react';

import Index from '@/pages/index';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('Index page', () => {
  describe('Render method', () => {
    it('should render carousel', () => {
      const { container } = render(<Index />);
      // eslint-disable-next-line testing-library/no-container,testing-library/no-node-access
      const section = container.getElementsByClassName('carousel');
      expect(section).toHaveLength(1);
    });
  });
});
