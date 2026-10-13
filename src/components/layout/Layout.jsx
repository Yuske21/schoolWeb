import Header from "./header/Header"
import Footer from './footer/Footer'
import { Outlet } from "react-router-dom"

function Layout({ children }) {
    return (
        <>
            <Header />
            <main>
                {children}
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout