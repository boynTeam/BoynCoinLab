import "../styles/globals.css";
import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";
import type { AppProps } from "next/app";

const client = createClient({
  autoConnect: false,
  provider: getDefaultProvider(),
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
}
