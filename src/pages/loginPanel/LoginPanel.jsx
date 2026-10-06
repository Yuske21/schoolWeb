import sytle from "./LoginPanel.module.css"
import { Button } from "../../components/button/Button"
import { Input } from "../../components/input/Input"

export const LoginPanel = () => {
    return (
        <>
            <section className={sytle.principal_container}>
                <div className={sytle.panel_container}>
                    <h2>Iniciar Sesion</h2>
                    <div className={sytle.subpanel}>
                        <label htmlFor="">
                            <i className="fa-solid fa-user"></i> Usuario:
                        </label>
                        <Input type={"text"} variant={"input_1"} placeholder="Ingrese su Usuario"/>
                    </div>
                    <div className={sytle.subpanel}>
                        <label htmlFor="">
                            <i className="fa-solid fa-key"></i> Contraseña:
                        </label>
                        <Input type={"password"} variant={"input_1"} placeholder="Ingrese su Contraseña" />
                    </div>
                    <Button type={"text"} variant={"btn_red"}>Iniciar Sesion</Button>
                    <hr />
                    <a href="">Solicitar cambio de Contraseña</a>
                </div>
            </section>
        </>
    );
}