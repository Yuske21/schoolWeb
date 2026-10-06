import style from '../../components/cardPanel/CardPanel.module.css'

const CardPanel = ({users, titulo, subtitulo}) => {
    
    return (
        <section className={style.principal_container}>
            <section className={style.encabezado}>
                <h1>{titulo}</h1>
                <p>{subtitulo}</p>
            </section>
            <section className={style.user_grid}>
                {users.map((user) => (
                    <article className={style.user_card} key={user.id}>
                        <div className={style.foto_container}>
                            <img src={user.foto} alt={`Foto de ${user.nombre}`} />
                        </div>
                        <div className={style.info}>
                            <h2>Prof. {user.nombre}</h2>
                            <div className={style.panel_materia}>
                                <span className={style.info_materia}>- {user.materia} -</span>
                            </div>
                            <div className={style.dato}>
                                <span>Curso - {user.curso}</span>
                            </div>
                            <div className={style.dato}>
                                <span>Turno - {user.turno}</span>
                            </div>
                            <div className={style.dato}>
                                <span>Nivel</span>
                                <p>{user.nivel}</p>
                            </div>
                        </div>
                    </article>
                ))}
            </section>
        </section>
    );
};

export default CardPanel;