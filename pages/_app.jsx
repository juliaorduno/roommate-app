import App, { Container } from 'next/app';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faShoppingBasket, faBullhorn, faCheck, faCalendarAlt, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Header from 'next/head';
import { ModalProvider } from 'styled-react-modal'
import { createGlobalStyle } from 'styled-components';

library.add(faPlus, faShoppingBasket, faBullhorn, faCheck, faCalendarAlt, faBell, faUser);

class RoommatesApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ModalProvider>
        <Container>
          <Header>
            <title>Roommate</title>
          </Header>
          <GlobalStyle />
          <Component {...pageProps} />
        </Container>
      </ModalProvider>
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
