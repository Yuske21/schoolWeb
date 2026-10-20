/*import style from './Footer.module.css'
import logo from "../../../assets/index/logo.png";

const Footer = () => {
    return (
        <>
            <footer>
                <section className={style.prefooter_container}>
                    <div className={style.prefooter_box}>
                        <img src={logo} alt="Logo Del Colegio Santa Rita" />
                        <h3><i className="fa-solid fa-location-dot"></i> Ubicación</h3>
                        <p>Avda. Santo Cristo y Leocadio Paz</p>
                        <p>Banda Del Rio Sali (Cruz Alta)</p>
                        <p>Tucumán - Argentina</p>
                    </div>
                    <div className={style.prefooter_box}>
                        <h3><i className="fa-solid fa-map-location-dot"></i> Como llegar</h3>
                        <iframe
                            src="https://www.google.com/maps?q=-26.849914931269378, -65.15714479867928&output=embed"
                            width="100%"
                            height="200"
                            style={{ border: 0, padding: "4px 0" }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicación Colegio Santa Rita"
                        />
                    </div>
                    <div className={style.prefooter_box}>
                        <h3><i className="fa-solid fa-square-phone"></i> Contacto</h3>
                        <p><i className="fa-solid fa-phone-volume"></i> 4262626</p>
                        <p><i className="fa-brands fa-whatsapp"></i> 3815232323</p>
                        <p><i className="fa-regular fa-envelope"></i> colsantaritasec2024@gmail.com</p>
                    </div>
                    <div className={style.prefooter_box}>
                        <h3><i className="fa-solid fa-square-phone"></i> Redes Sociales</h3>
                        <a href="https://www.facebook.com/col.santarita.brs" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-facebook fa-xl"></i>
                        </a>
                        <a href="https://www.instagram.com/colegiosantarita.brs" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-square-instagram fa-xl"></i>
                        </a>
                        <a href="https://" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-x-twitter fa-xl"></i>
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-tiktok fa-xl"></i>
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-youtube fa-xl"></i>
                        </a>
                        <a href="https://wa.me/5493810000000?text=Hola%20quiero%20información" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-whatsapp fa-xl"></i>
                        </a>
                    </div>
                </section>
                <section className={style.footer}>
                    <p>Colegio Santa Rita | Tucumán - Argentina | &copy;2026 - Todos los Derechos Reservados</p>
                </section>
            </footer>
        </>
    )
}

export default Footer;*/


import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
    const anioActual = new Date().getFullYear();

    return (
        <footer id="contacto" className={styles.footer}>
            <div className={styles.contenedor}>
                <div className={styles.informacion}>
                    {/* Identidad institucional */}
                    <Link to="/" className={styles.identidad}>
                        <div className={styles.escudo} aria-hidden="true">
                            <span>SR</span>
                            <small>✦</small>
                        </div>

                        <div>
                            <strong>COLEGIO SANTA RITA</strong>
                            <span>Banda del Río Salí · Tucumán</span>
                        </div>
                    </Link>

                    {/* Datos de contacto: reemplazar por los oficiales */}
                    <div className={styles.contacto}>
                        <p>
                            <span aria-hidden="true">⌖</span>
                            <span>
                                Banda del Río Salí,
                                <br />
                                Tucumán, Argentina
                            </span>
                        </p>

                        <p>
                            <span aria-hidden="true">☎</span>
                            <a href="tel:+543810000000">
                                Teléfono institucional
                            </a>
                        </p>

                        <p>
                            <span aria-hidden="true">✉</span>
                            <a href="mailto:contacto@ejemplo.com">
                                Correo institucional
                            </a>
                        </p>
                    </div>

                    {/* Redes sociales */}
                    <div className={styles.redes}>
                        <h3>Seguinos en nuestras redes</h3>

                        <div className={styles.iconosRedes}>
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Facebook"
                            >
                                f
                            </a>

                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram"
                            >
                                ◎
                            </a>

                            <a
                                href="https://www.youtube.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="YouTube"
                            >
                                ▶
                            </a>
                        </div>
                    </div>

                    {/* Lema */}
                    <div className={styles.lema}>
                        <p>
                            Educación,
                            <br />
                            compromiso
                            <br />
                            y comunidad.
                        </p>
                    </div>
                </div>

                <div className={styles.pie}>
                    <p>
                        © {anioActual} Colegio Santa Rita.
                        Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
