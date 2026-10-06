import { useEffect, useState } from 'react';

function useItemId(id, archivo) {

    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {

        setLoading(true);
        setError(false);

        fetch(archivo)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error al cargar el archivo");
                }
                return response.json();
            })
            .then(data => {
                const itemEncontrado = data.find(item => item.id === parseInt(id));
                setItem(itemEncontrado || null);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error al cargar item:", error);
                setError(true);
                setLoading(false);
            });

    }, [id, archivo]);

    return {
        item,
        loading,
        error
    };
}

export default useItemId;