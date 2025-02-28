"use client";

import type { WidgetConfig } from "@bandohq/widget";
import { BandoWidget } from "@bandohq/widget";
import { ClientOnly } from "./ClientOnly";
import { useConnectModal } from "@rainbow-me/rainbowkit";

export function Widget() {
  const { openConnectModal } = useConnectModal();
  const config = {
    appearance: "light",
    theme: {
      mode: "light",
      container: {
        border: "1px solid transparent",
        maxWidth: "100%",
        maxHeight: "100vh",
      },
      typography: {
        fontFamily: "Kanit, sans-serif",
        fontSize: 16,
      },
    },
    walletConfig: {
      onConnect: () => {
        openConnectModal?.();
      },
    },
    buildUrl: true,
    hiddenUI: ["poweredBy", "header"],
  } as Partial<WidgetConfig>;

  return (
    <ClientOnly fallback={<div>fallback</div>}>
      <BandoWidget config={config} integrator="opera-minipay-app" />
    </ClientOnly>
  );
}
