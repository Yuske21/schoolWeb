
import { useEffect, useState } from "react";
import { collection, addDoc, Timestamp, onSnapshot, doc, updateDoc, deleteDoc} from "firebase/firestore";
import { db } from "../../../firebase/config";

import style from "./FormNews.module.css";

const FormNoticias = () => {

    // ESTADO DEL FORMULARIO
    const formularioInicial = {
        id: "",
        titulo: "",
        nivel: "",
        contenido: "",
        imagen: ""
    };

    const [formulario, setFormulario] = useState(formularioInicial);

    // Lista de noticias
    const [noticias, setNoticias] = useState([]);

    // Indica si estamos editando
    const [editando, setEditando] = useState(false);

    // Guarda el ID interno del documento de Firestore
    const [noticiaEditando, setNoticiaEditando] = useState(null);

    // Estado de guardado
    const [guardando, setGuardando] = useState(false);


    // OBTENER NOTICIAS DE FIRESTORE
    useEffect(() => {
        const noticiasRef = collection(db, "noticias");
        const desuscribir = onSnapshot(
            noticiasRef,
            (snapshot) => {
                const noticiasObtenidas = snapshot.docs.map((documento) => ({
                    firebaseId: documento.id,
                    ...documento.data()
                })).filter((noticia) => noticia.estado === true);
                // Ordenar de la más nueva a la más antigua
                noticiasObtenidas.sort((a, b) => {
                    const fechaA = a.fecha?.toMillis?.() || 0;
                    const fechaB = b.fecha?.toMillis?.() || 0;
                    return fechaB - fechaA;
                });
                setNoticias(noticiasObtenidas);
            },
            (error) => {
                console.error("Error al obtener noticias:", error);
            }
        );
        // Limpia el listener cuando se desmonta el componente
        return () => desuscribir();
    }, []);


    // CAMBIAR VALORES DEL FORMULARIO    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario({
            ...formulario,
            [name]: value
        });
    };


    // GUARDAR / ACTUALIZAR NOTICIA
    const guardarNoticia = async (e) => {
        e.preventDefault();
        // Validar campos
        if (!formulario.titulo ||
            !formulario.nivel ||
            !formulario.contenido ||
            !formulario.imagen
        ) {
            alert("Complete todos los campos.");
            return;
        }

        try {
            setGuardando(true);
            // MODO EDITAR
            if (editando) {
                const noticiaRef = doc(db, "noticias", noticiaEditando);
                await updateDoc(noticiaRef, {
                    id: formulario.id,
                    titulo: formulario.titulo,
                    nivel: formulario.nivel,
                    contenido: formulario.contenido,
                    imagen: formulario.imagen
                });
                alert("Noticia actualizada correctamente.");
            }
            // MODO AGREGAR          
            else {
                await addDoc(collection(db, "noticias"), {
                    id: formulario.id,
                    titulo: formulario.titulo,
                    nivel: formulario.nivel,
                    contenido: formulario.contenido,
                    imagen: formulario.imagen,
                    fecha: Timestamp.now(),
                    estado: true
                });
                alert("Noticia guardada correctamente.");
            }
            limpiarFormulario();
        } catch (error) {
            console.error("Error al guardar/actualizar noticia:",error);
            alert("No se pudo guardar la noticia.");
        } finally {
            setGuardando(false);
        }
    };
    
    // EDITAR NOTICIA
    const editarNoticia = (noticia) => {
        setFormulario({
            id: noticia.id || "",
            titulo: noticia.titulo || "",
            nivel: noticia.nivel || "",
            contenido: noticia.contenido || "",
            imagen: noticia.imagen || ""
        });

        // Guardamos el ID real de Firebase
        setNoticiaEditando(noticia.firebaseId);

        // Cambiamos el formulario a modo edición
        setEditando(true);

        // Llevar al usuario hacia arriba
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    // BORRAR NOTICIA
    const borrarNoticia = async (noticia) => {
        const confirmar = window.confirm(
            `¿Está seguro de que desea borrar la noticia "${noticia.titulo}"?`
        );

        if (!confirmar) {
            return;
        }

        try {
            const noticiaRef = doc(db, "noticias", noticia.firebaseId);
            //await deleteDoc(noticiaRef); //vamos a comentar par hacer un borrado logico
            await updateDoc(noticiaRef, {
                estado: false
            });

            alert("Noticia eliminada correctamente.");

            // Si justo estábamos editando esta noticia,
            // limpiamos el formulario
            if (noticiaEditando === noticia.firebaseId) {
                limpiarFormulario();
            }
        } catch (error) {console.error("Error al borrar noticia:", error);
            alert("No se pudo eliminar la noticia.");
        }
    };

    // LIMPIAR FORMULARIO
    const limpiarFormulario = () => {
        setFormulario(formularioInicial);
        setEditando(false);
        setNoticiaEditando(null);
    };

    // FORMATEAR FECHA
    const formatearFecha = (fecha) => {
        if (!fecha) {
            return "Sin fecha";
        }

        try {
            const fechaJS = fecha.toDate();

            return fechaJS.toLocaleString("es-AR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit"
            });
        } catch (error) {
            return "Fecha no disponible";
        }
    };

    // RENDER

    return (

        <section className={style.form_section}>
            {/* FORMULARIO */}
            <div className={style.form_container}>
                <div className={style.form_title}>
                    <h2>
                        {editando
                            ? "Editar Noticia"
                            : "Agregar una nueva Noticia"
                        }
                    </h2>
                    <p>
                        {editando
                            ? "Modifique los datos de la noticia"
                            : "Complete los datos de la noticia"
                        }
                    </p>
                </div>
                <form onSubmit={guardarNoticia}>
                    <div className={style.form_group}>
                        <label htmlFor="id">ID</label>
                        <input
                            type="text"
                            id="id"
                            name="id"
                            value={formulario.id}
                            onChange={handleChange}
                            placeholder="Identificador de la noticia"
                        />
                    </div>
                    <div className={style.form_group}>
                        <label htmlFor="titulo">Título</label>
                        <input
                            type="text"
                            id="titulo"
                            name="titulo"
                            value={formulario.titulo}
                            onChange={handleChange}
                            placeholder="Título de la noticia"
                        />
                    </div>
                    <div className={style.form_group}>
                        <label htmlFor="nivel">Nivel</label>
                        <select id="nivel" name="nivel" value={formulario.nivel} onChange={handleChange}>
                            <option value="">Seleccione un nivel</option>
                            <option value="Nivel Inicial">Nivel Inicial</option>
                            <option value="Nivel Primario">Nivel Primario</option>
                            <option value="Nivel Secundario">Nivel Secundario</option>
                            <option value="Nivel Superior">Nivel Superior</option>
                            <option value="Institucional">Institucional</option>
                        </select>
                    </div>
                    <div className={style.form_group}>
                        <label htmlFor="contenido">Contenido de la noticia</label>
                        <textarea
                            id="contenido"
                            name="contenido"
                            value={formulario.contenido}
                            onChange={handleChange}
                            placeholder="Escriba el contenido de la noticia..."
                            rows="8"
                        />
                    </div>
                    <div className={style.form_group}>
                        <label htmlFor="imagen">Imagen</label>
                        <input
                            type="text"
                            id="imagen"
                            name="imagen"
                            value={formulario.imagen}
                            onChange={handleChange}
                            placeholder="URL de la imagen"
                        />
                    </div>
                    {/* BOTONES */}
                    <div className={style.form_buttons}>
                        <button
                            type="submit"
                            disabled={guardando}
                            className={style.btn_guardar}
                        >
                            {guardando
                                ? "Guardando..."
                                : editando
                                    ? "Actualizar"
                                    : "Guardar"
                            }
                        </button>
                        <button
                            type="button"
                            onClick={limpiarFormulario}
                            className={style.btn_limpiar}
                        >
                            {editando ? "Cancelar edición" : "Limpiar"}
                        </button>
                        <button
                            type="button"
                            onClick={limpiarFormulario}
                            className={style.btn_cancelar}
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>

            {/* LISTADO DE NOTICIAS */}
            <div className={style.list_container}>
                <div className={style.list_title}>
                    <h2>Noticias cargadas</h2>
                    <p>Listado de noticias almacenadas en el sistema</p>
                </div>
                {noticias.length === 0 ? (
                    <div className={style.sin_noticias}>
                        No hay noticias cargadas.
                    </div>
                ) : (
                    <div className={style.table_container}>
                        <table className={style.noticias_table}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Título</th>
                                    <th>Nivel</th>
                                    <th>Contenido</th>
                                    <th>Imagen</th>
                                    <th>Fecha</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {noticias.map((noticia) => (
                                    <tr key={noticia.firebaseId}>
                                        <td>
                                            {noticia.id || "-"}
                                        </td>
                                        <td className={style.titulo_celda}>
                                            {noticia.titulo || "-"}
                                        </td>
                                        <td>
                                            {noticia.nivel || "-"}
                                        </td>
                                        <td className={style.contenido_celda}>
                                            {noticia.contenido || "-"}
                                        </td>
                                        <td className={style.imagen_celda}>
                                            {noticia.imagen ? (
                                                <img
                                                    src={noticia.imagen}
                                                    alt={noticia.titulo}
                                                    onError={(e) => {
                                                        e.currentTarget.style.display = "none";
                                                    }}
                                                />
                                            ) : (
                                                "Sin imagen"
                                            )}
                                        </td>
                                        <td>
                                            {formatearFecha(noticia.fecha)}
                                        </td>
                                        <td>
                                            <div className={style.acciones}>
                                                <button
                                                    type="button"
                                                    className={style.btn_editar}
                                                    onClick={() =>
                                                        editarNoticia(noticia)
                                                    }
                                                    title="Editar noticia"
                                                >
                                                    ✏️
                                                </button>
                                                <button
                                                    type="button"
                                                    className={style.btn_borrar}
                                                    onClick={() =>
                                                        borrarNoticia(noticia)
                                                    }
                                                    title="Borrar noticia"
                                                >
                                                    🗑️
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </section>
    );
};

export default FormNoticias;