import { Intercom } from "@intercom/messenger-js-sdk";
import { PropsWithChildren, useEffect } from "react";

type IntercomProviderProps = PropsWithChildren;
export const IntercomProvider = ({ children }: IntercomProviderProps) => {
  const app_id = process.env.INTERCOM_APP_ID ?? "";

  // NOTE: Boot Intercom on app start
  useEffect(() => {
    Intercom({ app_id });
  }, []);

  return <>{children}</>;
};
