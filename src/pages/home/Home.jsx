
import Noticias from '../../components/layout/noticias/Noticias'
import Info from '../../components/layout/info/Info'
import Hero from '../../components/layout/hero/Hero'
import Accesos from '../../components/layout/accesos/Accesos'
import Niveles from '../../components/layout/niveles/Niveles'
import Numbers from '../../components/layout/numbers/Numbers'


export const Home = () => {
    return (
        <>
            <Hero />
            <Accesos />
            <Info />
            <Niveles />
            <Noticias />
            <Numbers />
        </>
    )
}