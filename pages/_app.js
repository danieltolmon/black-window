import React from 'react';
import App from 'next/app';
import Head from 'next/head';

import 'assets/scss/nextjs-material-kit.scss?v=1.1.0';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>Black Window</title>
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}
