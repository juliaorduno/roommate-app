import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class HMXDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    const { styleTags } = this.props
    return (
      <html>
        <Head>
          {styleTags}
          <meta
            name="viewport"
            content="initial-scale=1, width=device-width"
            key="viewport"
          />
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
          <link 
            href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"
          />
          <link 
            rel="stylesheet"
            href="/static/styles/style.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default HMXDocument