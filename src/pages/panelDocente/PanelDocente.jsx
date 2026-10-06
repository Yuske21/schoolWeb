import ListaMateriales from './ListaMateriales'
import FormMaterial from './FormMaterial'
import Calendario from './Calendario'
import Header from "../../layouts/privateLayout/header/Header"
import Footer from "../../layouts/privateLayout/footer/Footer"
import './PanelDocente.css'

function PanelDocente() {
    return (
        <div className="panel-docente">
            <Header user="Docente: "/>   
            <main className="docente-main">
                <section className="panel materiales-panel">
                    <ListaMateriales />
                </section>
                <section className="panel formulario-panel">
                    <FormMaterial />
                </section>
                <section className="panel calendario-panel">
                    <Calendario />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default PanelDocente;