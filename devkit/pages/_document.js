import React from 'react';
import PropTypes from 'prop-types';
import Document, { Head, Main, NextScript } from 'next/document';
import { staticAsset } from '../src/getPageContext';
import flush from 'styled-jsx/server';

class MyDocument extends Document {
  render() {
    return (
      <html lang="en" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={staticAsset('apple-touch-icon.png')}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={staticAsset('favicon-32x32.png')}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={staticAsset('favicon-16x16.png')}
          />
          <link rel="manifest" href={staticAsset('site.webmanifest')} />
          <link
            rel="mask-icon"
            href={staticAsset('safari-pinned-tab.svg')}
            color="#e62d2d"
          />
          <link rel="shortcut icon" href={staticAsset('favicon.ico')} />
          <meta name="msapplication-TileColor" content="#e62d2d" />
          <meta
            name="msapplication-config"
            content={staticAsset('browserconfig.xml')}
          />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  let pageContext;
  const page = ctx.renderPage(Component => {
    const WrappedComponent = props => {
      pageContext = props.pageContext;
      return <Component {...props} />;
    };

    WrappedComponent.propTypes = {
      pageContext: PropTypes.object.isRequired
    };

    return WrappedComponent;
  });

  return {
    ...page,
    pageContext,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: (
      <>
        <style
          id="jss-server-side"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: pageContext ? pageContext.sheetsRegistry.toString() : ''
          }}
        />
        {flush() || null}
      </>
    )
  };
};

export default MyDocument;
