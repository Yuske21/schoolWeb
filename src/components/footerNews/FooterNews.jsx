import style from './FooterNews.module.css'

function FooterNews() {
    return (
        <>
            <section className={style.panelFooter_container}>
                <div>
                    <h2>NOTICIAS - <span className={style.span_text}>Nivel Inicial</span></h2>
                </div>
                <div className={style.subpanel_news}>                    
                    <div className={style.news}>
                        <img src="src/assets/niveles/inicial.png" alt="" />
                        <h3>Título de Noticia 1</h3>
                        <p className={style.date}>12/08/2026</p>
                    </div>
                    <div className={style.news}>
                        <img src="src/assets/niveles/inicial.png" alt="" />
                        <h3>Título de Noticia 1</h3>
                        <p className={style.date}>12/08/2026</p>
                    </div>
                    <div className={style.news}>
                        <img src="src/assets/niveles/inicial.png" alt="" />
                        <h3>Título de Noticia 1</h3>
                        <p className={style.date}>12/08/2026</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FooterNews;