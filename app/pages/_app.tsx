import React from "react"
import type { AppProps } from "next/app";
import Theme from "../assets/global-styles/theme"
import GlobalStyle from "../assets/global-styles/global";
import "../styles/global.css"
import Head from "next/head";
import ErrorBoundary from "../components/error-boundary/error-boundary.component";

export default function MyApp({ Component, pageProps }: AppProps) {
  let title = "JWT Decoder online";

  if ((Component as any).title !== undefined) {
    title = (Component as any).title;
  } 

  return (
    <Theme>
      <Head>
        <title>{title}</title>
      </Head>
      <GlobalStyle />
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
      <script async defer src="/static/bundle.js" type="text/javascript"></script>
      <script defer src="/static/antcs.js" type="text/javascript"></script>
    </Theme>
  );
}