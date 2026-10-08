import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
/**CSS*/
import style from "./InfoNoticias.module.css";

/**Formato Fecha */
const formatearFecha = (fecha) => {
    const fechaValida = fecha?.toDate?.() ?? fecha;

    if (!(fechaValida instanceof Date) || Number.isNaN(fechaValida.getTime())) {
        return "Fecha no disponible";
    }

    return fechaValida.toLocaleDateString("es-AR");
};

function InfoNoticias() {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [noticiasAnteriores, setNoticiasAnteriores] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancelado = false;

        const cargarNoticias = async () => {
            setCargando(true);
            setItem(null);
            setNoticiasAnteriores([]);
            setError(null);

            const idNumerico = Number(id);
            if (!id || !Number.isFinite(idNumerico)) {
                setCargando(false);
                return;
            }

            try {
                const noticiasRef = collection(db, "noticias");
                const consultaDetalle = query(noticiasRef, where("id", "==", idNumerico));
                const consultaRecientes = query(noticiasRef, orderBy("fecha", "desc"), limit(5));
                const [detalle, recientes] = await Promise.all([
                    getDocs(consultaDetalle),
                    getDocs(consultaRecientes)
                ]);

                if (cancelado) return;

                if (!detalle.empty) {
                    const documento = detalle.docs[0];
                    setItem({ ...documento.data(), idFirestore: documento.id });
                    setNoticiasAnteriores(
                        recientes.docs
                            .filter((noticia) => noticia.id !== documento.id)
                            .slice(0, 4)
                            .map((noticia) => ({
                                ...noticia.data(),
                                idFirestore: noticia.id
                            }))
                    );
                }
            } catch (errorObtenido) {
                if (!cancelado) {
                    setError(errorObtenido);
                }
            } finally {
                if (!cancelado) {
                    setCargando(false);
                }
            }
        };

        cargarNoticias();

        return () => {
            cancelado = true;
        };
    }, [id]);

    if (cargando) {
        return <h2 className={style.estado}>Cargando detalle de la noticia...</h2>;
    }

    if (error) {
        return (
            <h2 className={style.estado} role="alert">
                Error al obtener la noticia: {error.message}
            </h2>
        );
    }

    if (!item) {
        return <h2 className={style.estado}>No se encontró la noticia solicitada.</h2>;
    }

    return (
        <section className={style.principal_container}>
            <div className={style.panel_container}>
                <article className={style.panel1}>
                    <h3>NOTICIAS</h3>
                    <h1 className={style.title}>{item.titulo}</h1>
                    <figure className={style.panel1_imagen}>
                        {item.imagen && <img src={item.imagen} alt={item.titulo || "Noticia"} />}
                        {item.imagenTexto && (
                            <figcaption className={style.panel1_imagenText}>
                                {item.imagenTexto}
                            </figcaption>
                        )}
                    </figure>
                    <p className={style.panel1_date}>
                        Publicación: {formatearFecha(item.fecha)}
                    </p>
                    <div className={style.contenido}>{item.contenido}</div>
                </article>

                <aside className={style.panel2}>
                    <h3>NOTICIAS ANTERIORES</h3>
                    {noticiasAnteriores.length > 0 ? (
                        <div className={style.panel2_container}>
                            {noticiasAnteriores.map((noticia) => (
                                <Link
                                    to={`/info-noticias/${noticia.id}`}
                                    className={style.panel2_link}
                                    key={noticia.idFirestore}
                                >
                                    {noticia.imagen && (
                                        <div className={style.panel2_imagen}>
                                            <img
                                                src={noticia.imagen}
                                                alt={noticia.titulo || "Noticia"}
                                            />
                                        </div>
                                    )}
                                    <div className={style.panel2_title}>
                                        <p>{noticia.titulo}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <p className={style.sinNoticias}>No hay otras noticias disponibles.</p>
                    )}
                </aside>
            </div>
        </section>
    );
}

export default InfoNoticias;
