import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface IgnoreMeProps {}

const StyledIgnoreMe = styled.div`
  color: pink;
`;

export function IgnoreMe(props: IgnoreMeProps) {
  return (
    <StyledIgnoreMe>
      <h1>Welcome to IgnoreMe!</h1>
    </StyledIgnoreMe>
  );
}

export default IgnoreMe;
