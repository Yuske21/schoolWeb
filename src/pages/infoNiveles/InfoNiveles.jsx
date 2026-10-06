import style from '../../components/infoPanel/InfoPanel.module.css'
import FooterNews from '../../components/footerNews/FooterNews';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import useItemId from '../../hooks/useItemId';

function InfoNiveles() {

    const title = "Niveles";
    const { id } = useParams();
    const { item, loading, error } = useItemId(id, "/data/niveles.json");

    if (loading) {
        return <h2>Cargando detalle de {title}...</h2>;
    }

    if (error || !item) {
        return <h2>{title} no encontrado.</h2>;
    }


    if (!item) {
        return <h2>Cargando detalle de {title}</h2>
    }

    if(!item.id){
        return <h2>{title} No encontrado.</h2>
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
                                <img src={item.imagen} alt={item.title} />
                            </div>
                        </div>
                        <span className={style.subPanel_content}>{item.descripcion}</span>
                    </div>
                    <FooterNews />
                </div>
            </section>
        </>
    )
}

export default InfoNiveles;