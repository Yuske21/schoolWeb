import style from './Footer.module.css'
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

export default Footer;