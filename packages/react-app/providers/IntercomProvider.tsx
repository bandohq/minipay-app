import { Intercom } from "@intercom/messenger-js-sdk";
import { PropsWithChildren, useEffect } from "react";

type IntercomProviderProps = PropsWithChildren;
export const IntercomProvider = ({ children }: IntercomProviderProps) => {
  const app_id = process.env.NEXT_PUBLIC_INTERCOM_API_ID ?? "";

  // NOTE: Boot Intercom on app start
  useEffect(() => {
    Intercom({ app_id });
  }, []);

  return <>{children}</>;
};
