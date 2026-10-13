import style from './Header.module.css'
import Nav from '../nav/Nav'
import logo from "../../../assets/index/logo.png";

const Header = () => {
    return (
        <>
            <div className={style.bar_container}>
                <div className={style.header_ubication}>
                    <p><i className="fa-solid fa-location-dot fa-xl"></i> Banda del Río Salí - Tucumán</p>
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
            </header>
        </>
    );
};

export default Header;