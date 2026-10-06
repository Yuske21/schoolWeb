import style from './Numbers.module.css'

const Numbers = () => {
    return (
        <>
            <section className={style.number_container}>
                <div className={style.number_box}>
                    <p className={style.p1}>+15825</p>
                    <p>Alumnos</p>
                </div>
                <div className={style.number_box}>
                    <p className={style.p1}>+2347</p>
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
