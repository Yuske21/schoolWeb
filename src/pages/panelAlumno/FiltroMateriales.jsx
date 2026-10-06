import { useState } from "react";

function FiltroMateriales() {

    const [busqueda, setBusqueda] = useState("");
    const [materia, setMateria] = useState("");

    return (
        <div className="filtros-materiales">
            <div className="campo-busqueda">
                <label htmlFor="buscar-material">
                    Buscar material
                </label>
                <input
                    type="text"
                    id="buscar-material"
                    placeholder="Buscar por título..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                />
            </div>
            <div className="campo-materia">
                <label htmlFor="materia-filtro">
                    Materia
                </label>
                <select
                    id="materia-filtro"
                    value={materia}
                    onChange={(e) => setMateria(e.target.value)}
                >
                    <option value="">
                        Todas las materias
                    </option>
                    <option value="Matemática">
                        Matemática
                    </option>
                    <option value="Lengua">
                        Lengua
                    </option>
                    <option value="Programación">
                        Programación
                    </option>
                    <option value="Historia">
                        Historia
                    </option>
                </select>
            </div>
            <button className="btn-buscar">Buscar</button>
        </div>
    );
}

export default FiltroMateriales;