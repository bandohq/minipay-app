import type { Chain } from 'viem';
import { ChainKey, ChainType, CoinKey } from '@lifi/types';
import { useSyncWagmiConfig } from '@lifi/wallet-management';
import { injected } from '@wagmi/connectors';
import { useRef, type FC, type PropsWithChildren } from 'react';
import { createClient, http } from 'viem';
import { celo } from 'wagmi/chains';
import type { Config } from 'wagmi';
import { createConfig, WagmiProvider } from 'wagmi';

const connectors = [injected()];

export const WalletProvider: FC<PropsWithChildren> = ({ children }) => {
  const wagmi = useRef<Config>();
  if (!wagmi.current) {
    wagmi.current = createConfig({
      chains: [celo],
      client({ chain }) {
        return createClient({ chain, transport: http() });
      },
      ssr: true,
    });
    alert('WalletProvider');
  }

  useSyncWagmiConfig(wagmi.current, connectors, [celo] as Chain[]);
  return (
    <WagmiProvider config={wagmi.current} reconnectOnMount>
      {children}
    </WagmiProvider>
  );
};
/*export const mapToEVMChain = (chainData: Chain): Chain => ({
  key: ChainKey.CEL,
  chainType: ChainType.EVM,
  name: chainData.name,
  coin: CoinKey.CELO,
  id: chainData.id,
  mainnet: true,
  logoURI: '',
  metamask: {
    chainId: `0x${chainData.id.toString(16)}`,
    blockExplorerUrls: chainData.blockExplorers?.default.url ? [chainData.blockExplorers.default.url] : [],
    chainName: chainData.name,
    nativeCurrency: {
      name: chainData.nativeCurrency.name,
      symbol: chainData.nativeCurrency.symbol,
      decimals: chainData.nativeCurrency.decimals,
    },
    rpcUrls: [...chainData.rpcUrls.default.http],
  },
  multicallAddress: chainData.contracts?.multicall3?.address,
})*/
