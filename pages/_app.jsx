import App, { Container } from 'next/app';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faShoppingBasket, faBullhorn, faCheck, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Header from 'next/head';
import { createGlobalStyle } from 'styled-components';

library.add(faPlus, faShoppingBasket, faBullhorn, faCheck, faCalendarAlt);

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
    margin: 0;
  }

  body * {
    font-family: 'Poppins', sans-serif;
  }
`;

export default RoommatesApp;
