import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class RDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    const { styleTags } = this.props;
    return (
      <html lang="en">
        <Head>
          {styleTags}
          <meta name="viewport" content="initial-scale=1, width=device-width" key="viewport" />
          <link rel="icon" href="/static/images/favicon.ico" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:400,400i,600,700"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

RDocument.displayName = 'RDocument';

export default RDocument;
