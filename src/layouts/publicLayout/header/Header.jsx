/*import style from './Header.module.css'
import Nav from '../nav/Nav'
import logo from "../../../assets/index/logo.png";

const Header = () => {
    return (
        <>
            <div className={style.bar_container}>
                <div className={style.header_ubication}>
                    <p><i className="fa-solid fa-location-dot"></i> Banda del Río Salí - Tucumán</p>
                </div>
                <div className={style.header_social}>
                    <a href="https://www.facebook.com/col.santarita.brs" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-facebook fa-xl"></i>
                    </a>
                    <a href="https://www.instagram.com/colegiosantarita.brs" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-square-instagram fa-xl"></i>
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-tiktok fa-xl"></i>
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-whatsapp fa-xl"></i>
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <i className="fa-regular fa-envelope fa-xl"></i>
                    </a>
                </div>
            </div>
            <header className={style.header}>
                <div className={style.header_container}>
                    <img src={logo} alt="Logo Del Colegio Santa Rita" />
                    <div className={style.header_title}>
                        <h2>Colegio</h2>
                        <h1>Santa Rita</h1>
                    </div>                    
                    <div className={style.header_nav}>
                        <Nav />
                    </div>
                </div>
                <div>
                    <div className={style.sesion}>
                        Ingresar <i className="fa-solid fa-user"></i>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;*/


import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../../assets/index/logo.png";

export default function Header() {
    const [compacto, setCompacto] = useState(false);
    const [menuAbierto, setMenuAbierto] = useState(false);

    useEffect(() => {
        const controlarScroll = () => {
            setCompacto(window.scrollY > 80);
        };

        window.addEventListener("scroll", controlarScroll, {
            passive: true,
        });

        controlarScroll();

        return () => {
            window.removeEventListener("scroll", controlarScroll);
        };
    }, []);

    const cerrarMenu = () => setMenuAbierto(false);

    return (
        <header
            className={`${styles.header} ${compacto ? styles.compacto : ""
                }`}
        >
            {/* Franja superior: identidad y accesos */}
            <div className={styles.frente}>
                <Link
                    to="/"
                    className={styles.identidad}
                    onClick={cerrarMenu}
                    aria-label="Colegio Santa Rita - Inicio"
                >
                    {/*<div className={styles.escudo} aria-hidden="true">
                        <span>SR</span>
                        <small>✦</small>
                    </>*/}
                    <img src={logo} alt="Logo Del Colegio Santa Rita" width="50" />

                    <div className={styles.nombreColegio}>
                        <strong>COLEGIO SANTA RITA</strong>
                        <span>Banda del Río Salí · Tucumán</span>
                    </div>
                </Link>

                <div className={styles.accesos}>
                    <div className={styles.redes}>
                        <a href="https://www.facebook.com/col.santarita.brs" target="_blank" rel="noopener noreferrer" aria-label="Facebool">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/colegiosantarita.brs" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <i className="fa-brands fa-square-instagram"></i>
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                            <i className="fa-brands fa-tiktok"></i>
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer" aria-label="Email">
                            <i className="fa-regular fa-envelope"></i>
                        </a>                        
                    </div>

                    <Link to="/loginPanel" className={styles.botonDocentes}>
                        <span aria-hidden="true">♙</span>
                        Acceso Docentes
                    </Link>
                    <Link to="/loginAlumno" className={styles.botonAlumnos}>
                        <span aria-hidden="true">♙</span>
                        Acceso Alumnos
                    </Link>
                </div>

                <button
                    type="button"
                    className={styles.botonMenu}
                    onClick={() => setMenuAbierto(!menuAbierto)}
                    aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={menuAbierto}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            {/* Navegación principal */}
            <nav
                className={`${styles.navegacion} ${menuAbierto ? styles.navegacionAbierta : ""
                    }`}
                aria-label="Navegación principal"
            >
                <Link to="/" className={styles.enlace} onClick={cerrarMenu}>Inicio</Link>

                <div className={styles.grupoMenu}>
                    <a href="#institucion" className={styles.enlace}>
                        Institución <span className={styles.flecha}>⌄</span>
                    </a>
                    <div className={styles.submenu}>
                        <a href="#institucion" onClick={cerrarMenu}>
                            Quiénes somos
                        </a>
                        <Link to="/nuestra-historia" onClick={cerrarMenu}>
                            Nuestra historia
                        </Link>
                        <a href="#contacto" onClick={cerrarMenu}>
                            Contacto
                        </a>
                    </div>
                </div>

                <div className={styles.grupoMenu}>
                    <a href="#niveles" className={styles.enlace}>
                        Niveles <span className={styles.flecha}>⌄</span>
                    </a>

                    <div className={styles.submenu}>
                        <Link to="/info-niveles/1" onClick={cerrarMenu}>
                            Nivel Inicial
                        </Link>
                        <a href="#primario" onClick={cerrarMenu}>
                            Nivel Primario
                        </a>
                        <a href="#secundario" onClick={cerrarMenu}>
                            Nivel Secundario
                        </a>
                        <a href="#superior" onClick={cerrarMenu}>
                            Nivel Superior
                        </a>
                    </div>
                </div>

                <a href="#noticias" className={styles.enlace} onClick={cerrarMenu}>
                    Noticias
                </a>
                <a href="#contacto" className={styles.enlace} onClick={cerrarMenu}>
                    Contacto
                </a>

                <button
                    type="button"
                    className={styles.botonBuscar}
                    aria-label="Buscar"
                    title="Buscador próximamente"
                >
                    ⌕
                </button>
            </nav>
        </header>
    );
}
