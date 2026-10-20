/*import style from "./Hero.module.css";

const Hero = () => {
    return (
        <section className={style.hero}>
            <div className={style.overlay}>
                <h2>Educación con valores y compromiso</h2>
                <p>"Formando las nuevas generaciones..."</p>
            </div>
        </section>
    );
};

export default Hero;*/


import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-titulo">
      <div className={styles.imagenFondo} aria-hidden="true" />

      <div className={styles.contenido}>
        <p className={styles.etiqueta}>
          <span />
          BIENVENIDOS AL COLEGIO SANTA RITA
        </p>

        <h1 id="hero-titulo">
          Aprender, crecer
          <br />
          y construir el futuro.
        </h1>

        <p className={styles.descripcion}>
          Una comunidad educativa que acompaña
          <br className={styles.saltoEscritorio} />
          a sus estudiantes en cada etapa de su formación.
        </p>

        <div className={styles.botones}>
          <a href="#institucion" className={styles.botonPrincipal}>
            Conocé nuestra institución
            <span aria-hidden="true">→</span>
          </a>

          <a href="#niveles" className={styles.botonSecundario}>
            Nuestros niveles
          </a>
        </div>
      </div>

      <a
        href="#niveles"
        className={styles.indicadorScroll}
        aria-label="Desplazarse a nuestros niveles educativos"
      >
        <span />
      </a>
    </section>
  );
}
