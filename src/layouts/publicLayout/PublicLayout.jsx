import Footer from "./footer/Footer";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";

function PublicLayout({children}) {
    return (
        <>
            <Header />
            <main>
                {children}
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default PublicLayout;