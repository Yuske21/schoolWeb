import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";

import { db } from "../firebase/config";

const useNivelId = (id) => {
    const [resultado, setResultado] = useState({
        id: null,
        item: null,
        error: null
    });

    useEffect(() => {
        let cancelado = false;

        const idNumerico = Number(id);
        if (!id || !Number.isFinite(idNumerico)) {
            return () => {
                cancelado = true;
            };
        }

        const cargarNivel = async () => {
            try {
                const consultaNivel = query( collection(db, "niveles"), where("id", "==", idNumerico));
                const respuesta = await getDocs(consultaNivel);

                if (!cancelado) {
                    const documento = respuesta.docs[0];
                    setResultado({
                        id,
                        item: documento ? { ...documento.data(), idFirestore: documento.id } : null,
                        error: null
                    });
                }
            } catch (error) {
                if (!cancelado) {
                    setResultado({ id, item: null, error });
                }
            }
        };

        cargarNivel();

        return () => {
            cancelado = true;
        };
    }, [id]);

    const resultadoActual = resultado.id === id ? resultado : null;

    return {
        item: resultadoActual?.item ?? null,
        loading: Boolean(id) && Number.isFinite(Number(id)) && !resultadoActual,
        error: resultadoActual?.error ?? null
    };
};

export default useNivelId;