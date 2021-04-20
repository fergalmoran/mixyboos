import React from 'react';
import NextHead from 'next/head';

const Head = ({ children, title }) => (
  <React.Fragment>
    <NextHead>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />

      <title>{title}</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap"
        rel="stylesheet"
      />

      {children}
    </NextHead>
  </React.Fragment>
);
export default Head;
