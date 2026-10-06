import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

import style from './InfoNoticias.module.css'

function infoNoticias() {

    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return;
        const cargarDetalleItem = async () => {
            try {
                const queryId = query(
                    collection(db, "noticias"),
                    where("id", "==", Number(id))
                );

                const resp = await getDocs(queryId);
                if (resp.empty) {
                    console.log("No se encontró el item");
                    return;
                }

                setItem({
                    ...resp.docs[0].data(),
                    idFirestore: resp.docs[0].id
                });

            } catch (error) {
                setError(error);
            } finally {
                setCargando(false);
            }
        };

        cargarDetalleItem();
    }, [id]);

    if (cargando) {
        return <h2>Cargando Detalle del item...</h2>
    }
    if (error) {
        return <h2>Error al obtener el item: {error.message}</h2>
    }

    return (
        <>
            <section className={style.principal_container}>
                <div className={style.panel_container}>
                    <div className={style.panel1}>
                        <h3>NOTICIAS</h3>
                        <p className={style.title}>{item.titulo}</p>
                        <div className={style.panel1_imagen}>
                            <div>
                                <img src={item.imagen} alt={item.titulo} />
                                <p className={style.panel1_imagenText}>{item.imagenTexto}</p>
                            </div>
                        </div>
                        <p className={style.panel1_date}>
                            Publicacion: {item.fecha.toDate().toLocaleDateString("es-AR")}
                        </p>
                        <div>{item.contenido}</div>
                    </div>
                    <div className={style.panel2}>
                        <h3>NOTICIAS ANTERIORES</h3>
                        <div className={style.panel2_container}>
                            <Link to="/" className={style.panel2_link}>
                                <div className={style.panel2_imagen}>
                                    <img src={item.imagen} alt={item.titulo} />
                                </div>
                                <div className={style.panel2_title}>
                                    <p>{item.titulo}</p>
                                </div>
                            </Link>
                            <Link to="/" className={style.panel2_link}>
                                <div className={style.panel2_imagen}>
                                    <img src={item.imagen} alt={item.titulo} />
                                </div>
                                <div className={style.panel2_title}>
                                    <p>{item.titulo}</p>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default infoNoticias