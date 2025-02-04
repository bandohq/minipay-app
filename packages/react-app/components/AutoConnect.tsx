"use client";

import { useEffect } from "react";
import { useAccount, useConnect } from "wagmi";

export function AutoConnectWallet() {
  const { isConnected } = useAccount();
  const { connect, connectors } = useConnect();

  useEffect(() => {
    async function connectWallet() {
      if (isConnected) return;

      const injected = connectors.find((c) => c.id === "injected");

      if (injected) {
        connect({ connector: injected });
      } else if (typeof window !== "undefined" && window.ethereum.isMiniPay) {
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          console.log("MiniPay connected");
        } catch (error) {
          console.error("Error connecting to MiniPay:", error);
        }
      }
    }

    connectWallet();
  }, [isConnected, connect, connectors]);

  return null;
}
