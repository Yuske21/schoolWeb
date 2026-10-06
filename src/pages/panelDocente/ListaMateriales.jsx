function ListaMateriales() {

    const materiales = [
        {
            id: 1,
            titulo: "Trigonometria",
            materia: "Matematicas",
            fecha: "24/08/2026",
            hora: "14:30",
            archivo: "Introduccion_a_la_trigonometria.pdf"
        },
        {
            id: 2,
            titulo: "Ejercicios de CSS",
            materia: "Programación",
            fecha: "23/08/2026",
            hora: "18:15",
            archivo: "Ejercicios_CSS.pdf"
        },
        {
            id: 3,
            titulo: "Trabajo práctico N° 1",
            materia: "Desarrollo Web",
            fecha: "21/08/2026",
            hora: "10:20",
            archivo: "TP1.docx"
        }
    ];

    return (
        <div>
            <div className="panel-titulo">
                <h2><i className="fa-solid fa-list"></i> Mis materiales</h2>
            </div>
            <div className="materiales-lista">
                {materiales.map((material) => (
                    <article className="material-item" key={material.id}>
                        <div className="material-info">
                            <h3>{material.titulo}</h3>
                            <span>{material.materia}</span>
                            <small>{material.fecha} - {material.hora}</small>
                        </div>
                        <div className="material-acciones">
                            <p>
                                <span className="material_icon">
                                    <i className="fa-regular fa-file-lines"> </i>
                                </span>
                                <a href="#" className="material-link">
                                    {material.archivo}
                                </a>
                            </p>
                            <button className="btn-editar-material">Modificar</button>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}

export default ListaMateriales;