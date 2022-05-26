import {
  apiProvider,
  configureChains,
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
} from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import '@zoralabs/zord/style.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createClient, defaultChains, WagmiProvider } from 'wagmi'
import ModalProvider from '../providers/ModalProvider'
import { Header } from 'compositions/Header/HeaderComposition'

import { NFTFetchConfiguration } from '@zoralabs/nft-hooks'
import { ZDKAlphaFetchStrategy } from '@zoralabs/nft-hooks/dist/strategies'

import { GALACTUS_BASE_URL } from 'utils/env-vars'

const infuraId = process.env.INFURA_ID

// const chains = defaultChains
const { chains, provider } = configureChains(defaultChains, [
  apiProvider.infura(infuraId),
])

const { connectors } = getDefaultWallets({
  appName: 'Contract Manager',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

export const strategy = new ZDKAlphaFetchStrategy('1', GALACTUS_BASE_URL)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider client={wagmiClient}>
      <NFTFetchConfiguration networkId="1" strategy={strategy}>
        <RainbowKitProvider
          chains={chains}
          coolMode
          theme={lightTheme({
            accentColor: 'black',
            borderRadius: 'small',
          })}
        >
          <ModalProvider>
            <div id="modal-root" />
            <Header />
            <Component {...pageProps} />
          </ModalProvider>
        </RainbowKitProvider>
      </NFTFetchConfiguration>
    </WagmiProvider>
  )
}

export default MyApp