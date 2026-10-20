
import styles from "./Gallery.module.css";

const niveles = [
  {
    id: "inicial",
    nombre: "Nivel Inicial",
    descripcion: "Los primeros aprendizajes para toda la vida.",
    imagen:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=700&q=85",
    icono: "♧",
  },
  {
    id: "primario",
    nombre: "Nivel Primario",
    descripcion: "Descubrir, explorar y aprender.",
    imagen:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=85",
    icono: "▤",
  },
  {
    id: "secundario",
    nombre: "Nivel Secundario",
    descripcion: "Crecer, pensar y proyectarse.",
    imagen:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=85",
    icono: "🎓",
  },
  {
    id: "superior",
    nombre: "Nivel Superior",
    descripcion: "Formación para el futuro profesional.",
    imagen:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=700&q=85",
    icono: "✦",
  },
];

export default function Gallery() {
  return (
    <section
      id="niveles"
      className={styles.niveles}
      aria-labelledby="titulo-niveles"
    >
      <div className={styles.contenedor}>
        <div className={styles.encabezado}>
          <span className={styles.lineaRoja} />

          <h2 id="titulo-niveles">
            Nuestra propuesta educativa
          </h2>

          <p>
            Una formación para cada etapa de la vida.
          </p>
        </div>

        <div className={styles.grilla}>
          {niveles.map((nivel) => (
            <article
              key={nivel.id}
              id={nivel.id}
              className={styles.tarjeta}
            >
              <div className={styles.imagenContenedor}>
                <img
                  src={nivel.imagen}
                  alt={`Estudiantes del ${nivel.nombre}`}
                  loading="lazy"
                />
              </div>

              <div className={styles.icono}>
                <span aria-hidden="true">{nivel.icono}</span>
              </div>

              <div className={styles.contenido}>
                <h3>{nivel.nombre}</h3>
                <p>{nivel.descripcion}</p>

                <a
                  href="#contacto"
                  className={styles.enlace}
                  aria-label={`Consultar información sobre ${nivel.nombre}`}
                >
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
