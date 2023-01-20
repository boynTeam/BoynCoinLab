import "@rainbow-me/rainbowkit/styles.css";
import "../styles/globals.css";
import styles from "../styles/App.module.css";

import {
  midnightTheme,
  darkTheme,
  lightTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { WagmiConfig, createClient, configureChains } from "wagmi";
import { polygon, optimism, arbitrum } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import type { AppProps } from "next/app";
import TopBar from "../components/topbar";

const { chains, provider } = configureChains(
  [polygon, optimism, arbitrum],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const client = createClient({
  autoConnect: false,
  connectors,
  provider,
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider
        theme={lightTheme({ overlayBlur: "small" })}
        chains={chains}
        modalSize="compact"
      >
        <div className={styles.container}>
          <TopBar />
          <Component {...pageProps} />
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
