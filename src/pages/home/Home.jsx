
import Noticias from '../../layouts/publicLayout/noticias/Noticias'
import Info from '../../layouts/publicLayout/info/Info'
import Hero from '../../layouts/publicLayout/hero/Hero'
import Accesos from '../../layouts/publicLayout/accesos/Accesos'
import Niveles from '../../layouts/publicLayout/niveles/Niveles'
import Numbers from '../../layouts/publicLayout/numbers/Numbers'


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