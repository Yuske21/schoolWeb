import { Link } from "react-router-dom";

import style from "./Niveles.module.css";

const Niveles = () => {
    return (
        <>
            <section id="niveles" className={style.level_section}>
                <div className="app_title_container">
                    <div className="app_title1">
                        <p className="p_red">EDUCACIÓN</p>
                    </div>
                    <div className="app_title2">
                        <p>Nuestros Niveles</p>
                    </div>
                </div>
                <div className={style.level_container}>
                    <div className={style.level}>
                        <div className={style.level_img}>
                            <img src="src/assets/niveles/inicial.png" alt="" />
                        </div>
                        <h3 className={style.level_title}>INICIAL</h3>
                        <p className={style.level_content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nihil animi doloribus mollitia suscipit eos iusto voluptatem veniam dolore, ratione amet voluptate delectus ullam eum dolorum ipsam. Nihil, omnis vero!
                            Cupiditate amet eveniet ratione dolore libero deleniti tempora expedita autem voluptates omnis recusandae delectus, reiciendis pariatur, aspernatur ipsam et adipisci voluptate distinctio veniam. Deleniti pariatur ipsa explicabo praesentium laborum. Nesciunt!
                            Quod nostrum eaque quas labore illum eveniet. Ut dolores sunt quod? Quos, minus? Modi qui perspiciatis sit earum totam. Ex accusantium ut quasi exercitationem, quidem dolorem voluptatibus repellendus consequuntur fugiat.
                        </p>
                        <div className={style.level_link}>
                            <Link to="/Info-niveles/1" className="a_btn_red">
                                <i className="fa-solid fa-list"></i> Conocer más...
                            </Link>
                        </div>
                    </div>
                    <div className={style.level}>
                        <div className={style.level_img}>
                            <img src="src/assets/niveles/primario.png" alt="" />
                        </div>
                        <h3 className={style.level_title}>PRIMARIO</h3>
                        <p className={style.level_content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nihil animi doloribus mollitia suscipit eos iusto voluptatem veniam dolore, ratione amet voluptate delectus ullam eum dolorum ipsam. Nihil, omnis vero!
                            Cupiditate amet eveniet ratione dolore libero deleniti tempora expedita autem voluptates omnis recusandae delectus, reiciendis pariatur, aspernatur ipsam et adipisci voluptate distinctio veniam. Deleniti pariatur ipsa explicabo praesentium laborum. Nesciunt!
                            Quod nostrum eaque quas labore illum eveniet. Ut dolores sunt quod? Quos, minus? Modi qui perspiciatis sit earum totam. Ex accusantium ut quasi exercitationem, quidem dolorem voluptatibus repellendus consequuntur fugiat.
                        </p>
                        <div className={style.level_link}>
                            <Link to="/Info-niveles/2" className="a_btn_red">
                                <i className="fa-solid fa-list"></i> Conocer más...
                            </Link>
                        </div>
                    </div>
                    <div className={style.level}>
                        <div className={style.level_img}>
                            <img src="src/assets/niveles/secundario.png" alt="" />
                        </div>
                        <h3 className={style.level_title}>SECUNDARIO</h3>
                        <p className={style.level_content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nihil animi doloribus mollitia suscipit eos iusto voluptatem veniam dolore, ratione amet voluptate delectus ullam eum dolorum ipsam. Nihil, omnis vero!
                            Cuodi qui perspiciatis sit earum totam. Ex accusantium ut quasi exercitationem, quidem dolorem voluptatibus repellendus consequuntur fugiat.
                        </p>
                        <div className={style.level_link}>
                            <Link to="/Info-niveles/3" className="a_btn_red">
                                <i className="fa-solid fa-list"></i> Conocer más...
                            </Link>
                        </div>
                    </div>
                    <div className={style.level}>
                        <div className={style.level_img}>
                            <img src="src/assets/niveles/superior.jpg" alt="" />
                        </div>
                        <h3 className={style.level_title}>SUPERIOR</h3>
                        <p className={style.level_content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nihil animi doloribus mollitia suscipit eos iusto voluptatem veniam dolore, ratione amet voluptate delectus ullam eum dolorum ipsam. Nihil, omnis vero!
                            Cupiditate amet eveniet ratione dolore libero dgsdfgsdfg sdfg sdfgsdfg sdfg sdfg sdf gsd fg sdfgsdfg sdfgsdfg sdfgs dfg sdfgsgsfdgfsd gsdf gsd fgs dfgsdfg sfg  sdfg s sfdg sdfgeleniti tempora expedita autem voluptates omnis recusandae delectus, 
                            reiciendis pariatur, aspernatur ipsam et adipisci voluptate distinctio veniam. Deleniti pariatur ipsa explicabo praesentium laborum. Nesciunt!
                            Quod nostrum eaque quas labore illum eveniet. Ut dolores sunt quod? Quos, minus? Modi qui perspiciatis sit earum totam. Ex accusantium ut quasi exercitationem, quidem dolorem voluptatibus repellendus consequuntur fugiat.
                        </p>
                        <div className={style.level_link}>
                            <Link to="/Info-niveles/4" className="a_btn_red">
                                <i className="fa-solid fa-list"></i> Conocer más...
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Niveles;