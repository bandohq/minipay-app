import "@/styles/globals.css";

import { AppProvider } from "@/providers/AppProvider";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-kanit",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <AppProvider> */}
        <div className={`${kanit.variable} font-sans`}>{children}</div>
        {/* </AppProvider> */}
      </body>
    </html>
  );
}
