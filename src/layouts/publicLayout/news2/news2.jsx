
import styles from "./News2.module.css";

const noticiasEjemplo = [
    {
        id: 1,
        categoria: "VIDA INSTITUCIONAL",
        titulo: "Acto escolar y celebración de nuestra comunidad",
        fecha: "15 de octubre de 2026",
        descripcion:
            "Compartimos una jornada de encuentro y participación de toda la comunidad educativa.",
        imagen:
            "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=85",
    },
    {
        id: 2,
        categoria: "ACTIVIDADES",
        titulo: "Proyectos y experiencias en el aula",
        fecha: "10 de octubre de 2026",
        descripcion:
            "Nuestros estudiantes aprenden a través de experiencias, creatividad y trabajo en equipo.",
        imagen:
            "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=700&q=85",
    },
    {
        id: 3,
        categoria: "DEPORTES",
        titulo: "Encuentros deportivos escolares",
        fecha: "5 de octubre de 2026",
        descripcion:
            "El deporte fomenta el compañerismo, el respeto y la participación de nuestros estudiantes.",
        imagen:
            "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=700&q=85",
    },
    {
        id: 4,
        categoria: "INSTITUCIONAL",
        titulo: "Novedades de nuestra institución",
        fecha: "1 de octubre de 2026",
        descripcion:
            "Consultá las novedades y comunicaciones de interés para las familias y los estudiantes.",
        imagen:
            "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=700&q=85",
    },
];

export default function News2({ noticias = noticiasEjemplo }) {
    const noticiasVisibles = [...noticias]
        .filter((noticia) => noticia.estado !== false)
        .slice(0, 4);

    return (
        <section
            id="noticias"
            className={styles.noticias}
            aria-labelledby="titulo-noticias"
        >
            <div className={styles.contenedor}>
                <div className={styles.encabezado}>
                    <div>
                        <span className={styles.lineaRoja} />

                        <h2 id="titulo-noticias">
                            Últimas novedades
                        </h2>
                    </div>

                    <a href="/noticias" className={styles.verTodas}>
                        Ver todas las noticias
                        <span aria-hidden="true">→</span>
                    </a>
                </div>

                <div className={styles.grilla}>
                    {noticiasVisibles.map((noticia) => (
                        <article
                            key={noticia.id}
                            className={styles.tarjeta}
                        >
                            <a
                                href={`/noticias/${noticia.id}`}
                                className={styles.imagenEnlace}
                                aria-label={`Leer: ${noticia.titulo}`}
                            >
                                <img
                                    src={noticia.imagen}
                                    alt=""
                                    loading="lazy"
                                />
                            </a>

                            <div className={styles.contenido}>
                                <span className={styles.categoria}>
                                    {noticia.categoria || noticia.nivel || "INSTITUCIONAL"}
                                </span>

                                <h3>
                                    <a href={`/noticias/${noticia.id}`}>
                                        {noticia.titulo}
                                    </a>
                                </h3>

                                <p className={styles.fecha}>
                                    <span aria-hidden="true">▦</span>
                                    {noticia.fecha}
                                </p>

                                <p className={styles.descripcion}>
                                    {noticia.descripcion || noticia.contenido}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                {noticiasVisibles.length === 0 && (
                    <p className={styles.sinNoticias}>
                        Próximamente compartiremos nuevas novedades.
                    </p>
                )}
            </div>
        </section>
    );
}
