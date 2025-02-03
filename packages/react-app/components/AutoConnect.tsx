"use client";

import { useEffect } from "react";
import { useAccount, useConnect } from "wagmi";

export function AutoConnectWallet() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();

  useEffect(() => {
    async function connectWallet() {
      if (isConnected) return;

      const injected = connectors.find((c) => c.id === "injected");

      if (injected) {
        connect({ connector: injected });
      } else if (typeof window !== "undefined" && window.celo) {
        /*try {
          await window.celo.enable();
          console.log("MiniPay conectado");
        } catch (error) {
          console.error("Error al conectar MiniPay:", error);
        }*/
      }
    }

    connectWallet();
  }, [isConnected, connect, connectors]);

  return null;
}
