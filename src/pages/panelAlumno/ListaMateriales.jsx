function ListaMateriales() {

    const materiales = [

        {
            id: 1,
            materia: "Matemática",
            docente: "Juan Pérez",
            titulo: "Trabajo práctico N° 1",
            archivo: "TP1_Matematica.pdf",
            fecha: "24/08/2026",
            hora: "14:30"
        },

        {
            id: 2,
            materia: "Lengua",
            docente: "María López",
            titulo: "Lectura - Unidad 2",
            archivo: "Lectura_Unidad_2.pdf",
            fecha: "23/08/2026",
            hora: "11:20"
        },

        {
            id: 3,
            materia: "Programación",
            docente: "Carlos Gómez",
            titulo: "Ejercicios de CSS",
            archivo: "Ejercicios_CSS.pdf",
            fecha: "22/08/2026",
            hora: "18:15"
        },

        {
            id: 4,
            materia: "Historia",
            docente: "Ana Rodríguez",
            titulo: "Revolución de Mayo",
            archivo: "Revolucion_Mayo.pdf",
            fecha: "20/08/2026",
            hora: "09:40"
        }

    ];

    return (
        <div className="lista-materiales">
            <div className="encabezado-materiales">
                <span>Material</span>
                <span>Materia</span>
                <span>Docente</span>
                <span>Fecha</span>
                <span>Archivo</span>
            </div>
            {materiales.map((material) => (
                <article
                    className="material-alumno"
                    key={material.id}
                >
                    <div className="material-titulo">
                        <strong>
                            {material.titulo}
                        </strong>
                        <small>
                            {material.archivo}
                        </small>
                    </div>
                    <div className="material-materia">
                        {material.materia}
                    </div>
                    <div className="material-docente">
                        {material.docente}
                    </div>
                    <div className="material-fecha">
                        <span>
                            {material.fecha}
                        </span>
                        <small>
                            {material.hora}
                        </small>
                    </div>
                    <div className="material-descarga">
                        <a href="#" className="btn-descargar">
                            Descargar
                        </a>
                    </div>
                </article>
            ))}
        </div>
    );
}

export default ListaMateriales;