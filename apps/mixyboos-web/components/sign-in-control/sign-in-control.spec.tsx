import React from 'react';
import { render } from '@testing-library/react';

import SignInControl from './sign-in-control';

describe('SignInControl', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SignInControl />);
    expect(baseElement).toBeTruthy();
  });
});
