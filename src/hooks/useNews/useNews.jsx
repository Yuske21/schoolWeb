import { useEffect, useState } from "react";
import { collection, addDoc, Timestamp, onSnapshot, doc, updateDoc, deleteDoc} from "firebase/firestore";

import { db } from "../../../firebase/config";

const formularioInicial = {
    id: "",
    titulo: "",
    nivel: "",
    contenido: "",
    imagen: ""
};


const useNoticias = () => {

    const [formulario, setFormulario] =
        useState(formularioInicial);

    const [noticias, setNoticias] =
        useState([]);

    const [editando, setEditando] =
        useState(false);

    const [noticiaEditando, setNoticiaEditando] =
        useState(null);

    const [guardando, setGuardando] =
        useState(false);


    // ==========================================
    // OBTENER NOTICIAS
    // ==========================================

    useEffect(() => {

        const noticiasRef =
            collection(db, "noticias");


        const desuscribir = onSnapshot(
            noticiasRef,

            (snapshot) => {

                const noticiasObtenidas =
                    snapshot.docs.map((documento) => ({

                        firebaseId: documento.id,

                        ...documento.data()

                    }));


                noticiasObtenidas.sort((a, b) => {

                    const fechaA =
                        a.fecha?.toMillis?.() || 0;

                    const fechaB =
                        b.fecha?.toMillis?.() || 0;

                    return fechaB - fechaA;

                });


                setNoticias(noticiasObtenidas);

            },

            (error) => {

                console.error(
                    "Error al obtener noticias:",
                    error
                );

            }
        );


        return () => desuscribir();

    }, []);


    // ==========================================
    // CAMBIAR FORMULARIO
    // ==========================================

    const manejarCambio = (e) => {

        const { name, value } = e.target;


        setFormulario({

            ...formulario,

            [name]: value

        });

    };


    // ==========================================
    // GUARDAR / ACTUALIZAR
    // ==========================================

    const guardarNoticia = async (e) => {

        e.preventDefault();


        if (
            !formulario.titulo ||
            !formulario.nivel ||
            !formulario.contenido ||
            !formulario.imagen
        ) {

            alert("Complete todos los campos.");

            return;

        }


        try {

            setGuardando(true);


            // EDITAR

            if (editando) {

                const noticiaRef =
                    doc(
                        db,
                        "noticias",
                        noticiaEditando
                    );


                await updateDoc(noticiaRef, {

                    id: formulario.id,

                    titulo: formulario.titulo,

                    nivel: formulario.nivel,

                    contenido: formulario.contenido,

                    imagen: formulario.imagen

                });


                alert(
                    "Noticia actualizada correctamente."
                );

            }


            // AGREGAR

            else {

                await addDoc(
                    collection(db, "noticias"),
                    {

                        id: formulario.id,

                        titulo: formulario.titulo,

                        nivel: formulario.nivel,

                        contenido: formulario.contenido,

                        imagen: formulario.imagen,

                        fecha: Timestamp.now(),

                        estado: true

                    }
                );


                alert(
                    "Noticia guardada correctamente."
                );

            }


            limpiarFormulario();

        } catch (error) {

            console.error(
                "Error al guardar/actualizar noticia:",
                error
            );

            alert(
                "No se pudo guardar la noticia."
            );

        } finally {

            setGuardando(false);

        }

    };


    // ==========================================
    // EDITAR
    // ==========================================

    const editarNoticia = (noticia) => {

        setFormulario({

            id: noticia.id || "",

            titulo: noticia.titulo || "",

            nivel: noticia.nivel || "",

            contenido: noticia.contenido || "",

            imagen: noticia.imagen || ""

        });


        setNoticiaEditando(
            noticia.firebaseId
        );


        setEditando(true);


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    };


    // ==========================================
    // BORRAR
    // ==========================================

    const borrarNoticia = async (noticia) => {

        const confirmar =
            window.confirm(
                `¿Está seguro de que desea borrar la noticia "${noticia.titulo}"?`
            );


        if (!confirmar) {
            return;
        }


        try {

            const noticiaRef =
                doc(
                    db,
                    "noticias",
                    noticia.firebaseId
                );


            await deleteDoc(noticiaRef);


            alert(
                "Noticia eliminada correctamente."
            );


            if (
                noticiaEditando ===
                noticia.firebaseId
            ) {

                limpiarFormulario();

            }

        } catch (error) {

            console.error(
                "Error al borrar noticia:",
                error
            );

            alert(
                "No se pudo eliminar la noticia."
            );

        }

    };


    // ==========================================
    // LIMPIAR
    // ==========================================

    const limpiarFormulario = () => {

        setFormulario(formularioInicial);

        setEditando(false);

        setNoticiaEditando(null);

    };


    return {

        formulario,
        noticias,
        editando,
        guardando,
        manejarCambio,
        guardarNoticia,
        editarNoticia,
        borrarNoticia,
        limpiarFormulario
    };
};

export default useNoticias;