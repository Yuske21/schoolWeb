import { useState } from "react";
import { Link } from "react-router-dom";

import style from "./Nav.module.css";

const Nav = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const [submenuAbierto, setSubmenuAbierto] = useState(null);

    const cerrarMenu = () => {
        setMenuAbierto(false);
        setSubmenuAbierto(null);
    };

    const alternarSubmenu = (submenu) => {
        setSubmenuAbierto((actual) => (actual === submenu ? null : submenu));
    };

    return (
        <div className={style.nav_root}>
            <button
                type="button"
                className={style.menu_toggle}
                aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={menuAbierto}
                aria-controls="primary-navigation"
                onClick={() => setMenuAbierto((abierto) => !abierto)}
            >
                <i
                    className={`fa-solid ${menuAbierto ? "fa-xmark" : "fa-bars"} fa-xl`}
                    aria-hidden="true"
                />
            </button>

            <nav
                id="primary-navigation"
                className={`${style.navbar_container} ${menuAbierto ? style.menu_open : ""}`}
                aria-label="Navegación principal"
            >
                <ul className={style.navbar}>
                    <li className={style.nav_item}>
                        <Link to="/" className={`${style.nav_link} ${style.a_principal}`} onClick={cerrarMenu}>
                            Inicio
                        </Link>
                    </li>
                    <li
                        className={`${style.nav_item} ${style.has_submenu} ${
                            submenuAbierto === "novedades" ? style.dropdown_open : ""
                        }`}
                    >
                        <button
                            type="button"
                            className={style.submenu_toggle}
                            aria-expanded={submenuAbierto === "novedades"}
                            aria-controls="news-submenu"
                            onClick={() => alternarSubmenu("novedades")}
                        >
                            Novedades
                        </button>
                        <ul id="news-submenu" className={style.dropdown}>
                            <li className={style.nav_item}>
                                <Link to="/#noticias" className={style.nav_link} onClick={cerrarMenu}>
                                    Noticias
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li
                        className={`${style.nav_item} ${style.has_submenu} ${
                            submenuAbierto === "institucion" ? style.dropdown_open : ""
                        }`}
                    >
                        <button
                            type="button"
                            className={style.submenu_toggle}
                            aria-expanded={submenuAbierto === "institucion"}
                            aria-controls="institution-submenu"
                            onClick={() => alternarSubmenu("institucion")}
                        >
                            Institución
                        </button>
                        <ul id="institution-submenu" className={style.dropdown}>
                            <li className={style.nav_item}>
                                <Link to="/autoridades" className={style.nav_link} onClick={cerrarMenu}>
                                    Autoridades
                                </Link>
                            </li>
                            <li className={style.nav_item}>
                                <Link to="/administracion" className={style.nav_link} onClick={cerrarMenu}>
                                    Administración
                                </Link>
                            </li>
                            <li className={style.nav_item}>
                                <Link to="/docentes" className={style.nav_link} onClick={cerrarMenu}>
                                    Docentes
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li
                        className={`${style.nav_item} ${style.has_submenu} ${
                            submenuAbierto === "niveles" ? style.dropdown_open : ""
                        }`}
                    >
                        <button
                            type="button"
                            className={style.submenu_toggle}
                            aria-expanded={submenuAbierto === "niveles"}
                            aria-controls="niveles-submenu"
                            onClick={() => alternarSubmenu("niveles")}
                        >
                            Niveles
                        </button>
                        <ul id="niveles-submenu" className={style.dropdown}>
                            <li className={style.nav_item}>
                                <Link to="/info-niveles/1" className={style.nav_link} onClick={cerrarMenu}>
                                    Inicial
                                </Link>
                            </li>
                            <li className={style.nav_item}>
                                <Link to="/info-niveles/2" className={style.nav_link} onClick={cerrarMenu}>
                                    Primario
                                </Link>
                            </li>
                            <li className={style.nav_item}>
                                <Link to="/info-niveles/3" className={style.nav_link} onClick={cerrarMenu}>
                                    Secundario
                                </Link>
                            </li>
                            <li className={style.nav_item}>
                                <Link to="/info-niveles/4" className={style.nav_link} onClick={cerrarMenu}>
                                    Terciario
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className={style.nav_item}>
                        <Link to="/#contacto" className={style.nav_link} onClick={cerrarMenu}>
                            Contacto
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;
