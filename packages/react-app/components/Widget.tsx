'use client'

import type { WidgetConfig } from '@bandohq/widget'
import { BandoWidget } from '@bandohq/widget'
import { ClientOnly } from './ClientOnly'
import { useConnectModal } from '@rainbow-me/rainbowkit';


export function Widget() {
  const { openConnectModal } = useConnectModal();
  const config = {
    appearance: 'light',
    theme: {
      container: {
        border: '1px solid rgb(234, 234, 234)',
        borderRadius: '16px',
      },
    },
    walletConfig: {
      onConnect: ()=>{openConnectModal?.();}
    },
    hiddenUI: ["walletMenu"],
  } as Partial<WidgetConfig>

  return (
    <ClientOnly fallback={<div>fallback</div>}>
      <BandoWidget config={config} integrator="bando-minipay-app" />
    </ClientOnly>
  )
}
