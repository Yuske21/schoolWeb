import style from '../../components/infoPanel/InfoPanel.module.css'
import FooterNews from '../../components/footerNews/FooterNews';
import { useParams } from 'react-router-dom';

import useNivelId from '../../hooks/useNivelId';

function InfoNiveles() {

    const title = "Niveles";
    const { id } = useParams();
    const { item, loading, error } = useNivelId(id);

    if (loading) {
        return <h2>Cargando detalle de {title}...</h2>;
    }

    if (error) {
        return <h2 role="alert">Error al obtener {title.toLowerCase()}: {error.message}</h2>;
    }

    if (!item) {
        return <h2>{title} no encontrado.</h2>;
    }

    return (
        <>
            <section className={style.principal_container}>
                <div className={style.panel_container}>
                    <div className={style.subPanel_title}>
                        <h3>COLEGIO SANTA RITA</h3>
                        <h2>{item.titulo}</h2>
                    </div>
                    <div>
                        <div className={style.panel_imagen}>
                            <div className={style.shadow_img}>
                            </div>
                            <div className={style.panel_img}>                                
                                <img src={item.imagen} alt={item.titulo} />
                            </div>
                        </div>
                        <span className={style.subPanel_content}>{item.contenido}</span>
                    </div>
                    <FooterNews nivel={item.titulo} />
                </div>
            </section>
        </>
    )
}

export default InfoNiveles;