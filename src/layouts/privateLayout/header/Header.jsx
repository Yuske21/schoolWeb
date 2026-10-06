import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css"
import Logo from "../../../assets/index/logo.png"


function Header({ user }) {
    const [hora, setHora] = useState(new Date());

    useEffect(() => {
        const intervalo = setInterval(() => {
            setHora(new Date());
        }, 1000);
        return () => clearInterval(intervalo);
    }, []);

    return (
        <>
            <header className={style.barra_user}>
                <div className={style.user_info}>
                    <i className="fa-solid fa-user"></i>
                    <span>{user}</span>
                    <strong>Juan Pérez</strong>
                </div>
                <div className={style.hora_user}>
                    <i className="fa-solid fa-clock"></i> {hora.toLocaleTimeString("es-AR")}
                </div>
                <div className={style.acciones_user}>
                    <button className={style.btn_datos}>
                        Modificar mis datos <i className="fa-solid fa-gear"></i>
                    </button>
                    <button className={style.btn_salir}>
                        Cerrar sesión <i className="fa-solid fa-right-from-bracket"></i>
                    </button>
                </div>
            </header>
            <div className={style.barra_colegio_user}>
                <div className={style.logo_colegio_user}>
                    <img src={Logo} alt="" width="85px" />
                </div>
                <h1>
                    Colegio Santa Rita
                </h1>
            </div>
            <nav className={style.menu_user}>
                <Link to="/panel-alumno">Inicio</Link>
                <Link to="/panel-alumno">Materiales</Link>
                <Link to="/panel-alumno">Agregados recientes</Link>
            </nav>
        </>
    );
}

export default Header;