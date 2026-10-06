import style from "./Hero.module.css";

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

export default Hero;