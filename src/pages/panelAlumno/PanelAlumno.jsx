import FiltroMateriales from "./FiltroMateriales";
import ListaMateriales from "./ListaMateriales";
import Header from "../../layouts/privateLayout/header/Header"
import Footer from "../../layouts/privateLayout/footer/Footer"
import "./PanelAlumno.css";

function PanelAlumno() {

    return (
        <div className="panel-alumno">
            <Header user="Alumno: " />
            <main className="alumno-main">
                <section className="panel-materiales">
                    <div className="titulo-panel">
                        <h2>Material de estudio</h2>
                        <p>
                            Consultá y descargá los materiales
                            proporcionados por tus docentes.
                        </p>
                    </div>
                    <FiltroMateriales />
                    <ListaMateriales />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default PanelAlumno;