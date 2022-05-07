import { lightTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import { WagmiProvider } from "wagmi";
import "@rainbow-me/rainbowkit/styles.css";

import "../lib/global.css";
import { chains, wagmiClient } from "../lib/wallet-connection";

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
  }

  #gradient {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    pointer-events: none;
    width: 100vw;
    height: 100vh;
    background: radial-gradient(150% 100% at 50% 0%, rgb(205, 232, 251) 0%, rgb(252, 243, 249) 50%, rgb(255, 255, 255) 100%);
    z-index: -4;
  }
`;

export default function App({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  return (
    <WagmiProvider client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={lightTheme({ accentColorForeground: "rgb(37, 99, 235)" })}
      >
        <Head>
          <title>RainbowKit Wallet Connection</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <div id="gradient" />
        <GlobalStyle />
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiProvider>
  );
}
