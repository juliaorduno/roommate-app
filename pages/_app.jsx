import App, { Container } from 'next/app';
import React from 'react';
import Header from 'next/head';
import { createGlobalStyle } from 'styled-components';

class RoommatesApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Header>
          <title>Roommate</title>
        </Header>
        <GlobalStyle />
        <Component {...pageProps} />
      </Container>
    );
  }
}

RoommatesApp.displayName = 'RoommatesApp';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
  }
`;

export default RoommatesApp;
