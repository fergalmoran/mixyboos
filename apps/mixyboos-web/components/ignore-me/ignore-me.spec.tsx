import React from 'react';
import { render } from '@testing-library/react';

import IgnoreMe from './ignore-me';

describe('IgnoreMe', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IgnoreMe />);
    expect(baseElement).toBeTruthy();
  });
});
