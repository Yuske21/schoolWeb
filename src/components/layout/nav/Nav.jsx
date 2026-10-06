import style from "./Nav.module.css"

const Nav = () => {
    return (
        <section>            
            {/**-- vertical nav -- */}
            <label htmlFor="menu_hamburger" className={style.label_hamburger}>
                <i className="fa-solid fa-bars fa-2xl"></i>                
            </label>
            <input type="checkbox" id="menu_hamburger" className={style.menu_hamburger} />
            {/**-- horizontal nav -- */}
            <div className={style.navbar_container}>                
                <nav className={style.navbar}>
                    <div className={style.nav_item}>
                        <a href="/" className={style.a_principal}>Inicio</a>
                    </div>
                    <div className={style.nav_item + " " + style.has_submenu}>
                        <a href="#">Novedades</a>
                        <div className={style.dropdown}>
                            <div className={style.nav_item}>
                                <a href="#">Noticias</a>
                            </div>
                            <div className={style.nav_item}>
                                <a href="#">Eventos</a>
                            </div>
                            <div className={style.nav_item}>
                                <a href="#">Anuncios</a>
                            </div>
                        </div>
                    </div>
                    <div className={style.nav_item + " " + style.has_submenu}>
                        <a href="#">Institucion</a>
                        <div className={style.dropdown}>
                            <div className={style.nav_item + " " + style.has_submenu}>
                                <a href="#">Historia</a>
                                <div className={style.dropdown + " " + style.submenu}>
                                    <a href="#">Historia 1</a>
                                    <a href="#">Historia 2</a>
                                    <a href="#">Historia 3</a>
                                </div>
                            </div>
                            <div className={style.nav_item}>
                                <a href="#">Autoridades</a>
                            </div>
                            <div className={style.nav_item}>
                                <a href="#">Proyecto</a>
                            </div>
                        </div>
                    </div>
                    <div className={style.nav_item}>
                        <a href="#">Niveles</a>
                    </div>
                    <div className={style.nav_item}>
                        <a href="#">Comunidad</a>
                    </div>
                    <div className={style.nav_item}>
                        <a href="#">Contacto</a>
                    </div>
                </nav >
            </div>
        </section>
    );
};

export default Nav;