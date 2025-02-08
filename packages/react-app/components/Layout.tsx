import { FC, ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import { Drawer, Button } from "@mui/material";
import { useWidgetEvents, WidgetEvent } from "@bandohq/widget";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const widgetEvents = useWidgetEvents();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleInsufficientBalance = () => setDrawerOpen(true);
    const handleNoTokensAvailable = () => setDrawerOpen(true);

    widgetEvents.on(WidgetEvent.InsufficientBalance, handleInsufficientBalance);
    widgetEvents.on(WidgetEvent.NoTokensAvailable, handleNoTokensAvailable);

    return () => {
      widgetEvents.off(WidgetEvent.InsufficientBalance, handleInsufficientBalance);
      widgetEvents.off(WidgetEvent.NoTokensAvailable, handleNoTokensAvailable);
    };
  }, []);

  return (
    <>
        <div className="bg-gypsum overflow-hidden flex flex-col min-h-screen">
            <Header />
            <div className="max-w-7xl mx-auto" style={{ width: "100%" }}>
                {children}
            </div>
        </div>
        <Drawer
            anchor="bottom"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            sx={{
                "& .MuiDrawer-paper": {
                    borderRadius: "1rem 1rem 0 0",
                    minHeight: "45%",
                    fontFamily: "Be Vietnam Pro, sans-serif",
                },
            }}
        >
            <div className="bg-white p-4 m-auto">
                <h1 style={{ textAlign: 'center', fontSize: '2rem' }}>Add some funds!</h1>
                <p style={{ textAlign: 'center' }}>Your wallet does not have enough funds to complete this transaction.</p>
                <Button sx={{
                    backgroundColor: "#00955f",
                    color: "white",
                    marginTop: "1rem",
                    width: "100%",
                    minHeight: "3rem",
                    textTransform: 'capitalize',
                }} 
                href="https://minipay.opera.com/add_cash"
                >
                    Fund MiniPay
                </Button>
            </div>
        </Drawer>
    </>
  );
};

export default Layout;
