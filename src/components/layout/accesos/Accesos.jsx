import style from "./Accesos.module.css";
import { Link } from "react-router-dom";

const Accesos = () => {
    return (
        <section className={style.accesos_section}>
            <div className={style.accesos}>
                <Link to="/autoridades">AUTORIDADES</Link>
                <Link to="/administracion">ADMINISTRACION</Link>
                <Link to="/docentes">DOCENTES</Link>
                <Link to="/loginPanel">CAMPUS VIRTUAL </Link>
                <Link to="/inscripciones">INSCRIPCIONES</Link>
                <Link to="/calendario">CALENDARIO</Link>
            </div>
        </section>
    );
};

export default Accesos;