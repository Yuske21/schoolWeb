import { Home } from './pages/home/Home.jsx'
import { LoginPanel } from './pages/loginPanel/LoginPanel.jsx'
import InfoNiveles from './pages/infoNiveles/InfoNiveles.jsx'
import InfoNoticias from './pages/infoNoticias/InfoNoticias.jsx'
import Autoridades from './pages/autoridades/Autoridades.jsx'
import Administracion from './pages/administracion/Administracion.jsx'
import Docentes from './pages/docentes/Docentes.jsx'
import PanelAdmin from './pages/panelAdmin/PanelAdmin.jsx'
import PanelAlumno from './pages/panelAlumno/PanelAlumno.jsx'
import PanelDocente from './pages/panelDocente/PanelDocente.jsx'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import PrivateLayout from './layouts/privateLayout/PrivateLayout.jsx'


function App() {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/autoridades" element={<Autoridades/>}/>
                    <Route path="/administracion" element={<Administracion/>}/>
                    <Route path="/docentes" element={<Docentes />} />
                    {/*<Route path="/info-niveles" element={<InfoNiveles/>}/>*/}
                    <Route path="/info-niveles/:id" element={<InfoNiveles />} />
                    <Route path="/info-noticias/:id" element={<InfoNoticias />} />
                    <Route path="/loginPanel" element={<LoginPanel />} />
                </Route>
                <Route element={<PrivateLayout />}>
                    <Route path="/panel-admin" element={<PanelAdmin />} />
                    <Route path="/panel-alumno" element={<PanelAlumno />} />
                    <Route path="/panel-docente" element={<PanelDocente />}/>
                </Route>
            </Routes>
        </>
    )
}

export default App
