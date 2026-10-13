import style from './Numbers.module.css'

const Numbers = () => {
    return (
        <>
            <section className={style.number_container}>
                <div className={style.number_box}>
                    <p className={style.p1}>+386</p>
                    <p>Alumnos</p>
                </div>
                <div className={style.number_box}>
                    <p className={style.p1}>+1247</p>
                    <p>Egresados</p>
                </div>
                <div className={style.number_box}>
                    <p className={style.p1}>4</p>
                    <p>Niveles</p>
                </div>
            </section>            
        </>
    );
};

export default Numbers;
