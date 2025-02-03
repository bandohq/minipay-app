import { FC, ReactNode } from "react";
import Header from "./Header";

interface Props {
    children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
    return (
        <>
            <div className="bg-gypsum overflow-hidden flex flex-col min-h-screen">
                <Header />
                <div className="py-5 max-w-7xl mx-auto">
                    {children}
                </div>
            </div>
        </>
    );
};

export default Layout;
