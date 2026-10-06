import style from "./Info.module.css";

const Info = () => {
    return (
        <>
            <section className={style.info_section}>
                <div className="app_title_container">
                    <div className="app_title1">
                        <p>Sobre Nosotros</p>
                    </div>
                    <div className="app_title2">
                        <p className="p_red">Quienes somos.</p>
                    </div>
                </div>
                <div className={style.info}>
                    <div className={style.info_text}>
                        <h1>El Colegio Santa Rita es una institución educativa privada que brinda
                            formación integral.
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis exercitationem voluptatem, maxime aspernatur fuga dignissimos illum tenetur odio porro repellat iure sunt maiores cum facere, repudiandae dicta aliquam. Sint, accusantium?
                            Voluptatem delectus hic deserunt quisquam minus quos! Odit excepturi ad facilis dolorum impedit sapiente iusto molestias ipsum fugit deserunt. Neque deserunt quaerat dolor modi fugiat, expedita iste officia fugit eaque!
                            Culpa hic repellendus error impedit expedita cumque natus sapiente repellat harum, iste delectus nulla non cupiditate. Molestiae molestias voluptatum architecto magnam obcaecati dolorum. Optio itaque a, earum officia aperiam veritatis.
                        </p>
                        <a href="http://" className="a_btn_red">Conocer más...</a>
                    </div>
                    <div>
                        <div className={style.info_img}>
                            <img src="src/assets/index/somos.png" alt="" className={style.img} />
                            <div className={style.img_box}>
                                <i className="fa-regular fa-bookmark fa-xl"></i>
                                <h2>39 Años de Compromiso</h2>
                                <p>Acompañando a nuestros estudiantes en cada etapa de su vida y crecimiento, formando personas mediante una trayectoria educativa integral basada en el compromiso, la formación académica y los valores humanos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Info;