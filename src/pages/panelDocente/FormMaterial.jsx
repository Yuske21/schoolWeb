import { useState } from "react";

function FormMaterial() {

    const [materia, setMateria] = useState("");
    const [docente, setDocente] = useState("");
    const [titulo, setTitulo] = useState("");
    const [archivo, setArchivo] = useState(null);

    const manejarArchivo = (e) => {
        setArchivo(e.target.files[0]);
    };

    const manejarGuardar = (e) => {
        e.preventDefault();

        console.log({
            materia,
            docente,
            titulo,
            archivo
        });
    };

    const cancelar = () => {

        setMateria("");
        setDocente("");
        setTitulo("");
        setArchivo(null);

        document.getElementById("archivo-material").value = "";
    };

    return (
        <div>
            <div className="panel-titulo">
                <h2><i className="fa-solid fa-file-lines"></i> Agregar material</h2>
                <p>Cargá un nuevo material para tus alumnos.</p>
            </div>

            <form className="form-material" onSubmit={manejarGuardar}>
                <div className="campo">
                    <label htmlFor="materia">Materia</label>
                    <select
                        id="materia"
                        value={materia}
                        onChange={(e) => setMateria(e.target.value)}
                        required
                    >
                        <option value="">Seleccionar materia</option>
                        <option value="Programación">Programación</option>
                        <option value="Matemática">Matemática</option>
                        <option value="Lengua">Lengua</option>
                        <option value="Historia">Historia</option>
                    </select>
                </div>
                <div className="campo">
                    <label htmlFor="docente">Docente</label>
                    <input
                        type="text"
                        id="docente"
                        value={docente}
                        onChange={(e) => setDocente(e.target.value)}
                        placeholder="Nombre del docente"
                        required
                    />
                </div>
                <div className="campo">
                    <label htmlFor="titulo">Título del material</label>
                    <input
                        type="text"
                        id="titulo"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        placeholder="Ej: Trabajo práctico N° 1"
                        required
                    />
                </div>

                <div className="campo">
                    <label htmlFor="archivo-material">Archivo</label>
                    <input
                        type="file"
                        id="archivo-material"
                        onChange={manejarArchivo}
                        required
                    />
                </div>
                <div className="botones-formulario">
                    <button type="submit" className="btn-guardar">Guardar</button>
                    <button type="button" className="btn-cancelar" onClick={cancelar}>Cancelar</button>
                </div>
            </form>
        </div>
    );
}

export default FormMaterial;