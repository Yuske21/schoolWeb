import Header from "./header/Header"
import Hero from "./hero/Hero"
import Noticias from "./noticias/Noticias"
import Info from "./info/Info"
import Niveles from "./niveles/Niveles"
import Accesos from './accesos/Accesos'
import Numbers from "./numbers/Numbers"
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