import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { Link } from 'react-router-dom'

import "../../../App.css";
import style from "./Noticias.module.css";

const Noticias = () => {

    const [items, setItems] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const obtenerItems = async () => {
            try {
                const itemRef = collection(db, "noticias"); // Referencia a la colección
                const consulta = query(itemRef, orderBy("fecha", "desc"), limit(4));

                const resp = await getDocs(consulta); // Consulta a Firestore
                const itemsDB = resp.docs.map((doc) => ({ ...doc.data(), idFirestore: doc.id })); // Transformamos los documentos                
                setItems(itemsDB); // Guardamos en el estado
                
            } catch (error) {                
                setError(error)
            } finally {
                setCargando(false);
            }
        };
        obtenerItems();
    }, []);

    if (cargando) {
        return <h2>Cargando items... </h2>
    }
    if (error) {
        return <h2>Error al obtener los items: {error}</h2>
    }

    return (
        <>
            <section className={style.news_section}>
                <div className="app_title_container">
                    <div className="app_title1">
                        <p>NOTICIAS</p>
                    </div>
                    <div className="app_title2">
                        <p>Novedades</p>
                    </div>
                </div>
                <div className={style.news_container}>
                    {
                        items.map(item => (
                            <Link to={`/info-noticias/${item.id}`} className={style.news_container_a} key={item.idFirestore}>
                                <div className={style.news_box}>
                                    <img src={item.imagen} alt={item.titulo} />
                                    <h3>{item.nivel}</h3>
                                    <h2>{item.titulo}</h2>
                                    <p>{item.fecha.toDate().toLocaleDateString("es-AR")}</p>
                                </div>
                            </Link>
                        ))
                    }                    
                </div>
            </section>
        </>
    )
}

export default Noticias;