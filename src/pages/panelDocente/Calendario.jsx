import { useState } from "react";

function Calendario() {

    const hoy = new Date();

    const [mes, setMes] = useState(hoy.getMonth());
    const [anio, setAnio] = useState(hoy.getFullYear());

    const nombresMeses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ];

    const diasSemana = [
        "Lun",
        "Mar",
        "Mie",
        "Jue",
        "Vie",
        "Sab",
        "Dom"
    ];

    const primerDia = new Date(anio, mes, 1).getDay();

    const cantidadDias = new Date(
        anio,
        mes + 1,
        0
    ).getDate();

    let primerDiaSemana = primerDia === 0
        ? 6
        : primerDia - 1;

    const cambiarMes = (direccion) => {

        if (direccion === "anterior") {

            if (mes === 0) {
                setMes(11);
                setAnio(anio - 1);
            } else {
                setMes(mes - 1);
            }

        } else {

            if (mes === 11) {
                setMes(0);
                setAnio(anio + 1);
            } else {
                setMes(mes + 1);
            }
        }
    };

    const esHoy = (dia) => {

        return (
            dia === hoy.getDate() &&
            mes === hoy.getMonth() &&
            anio === hoy.getFullYear()
        );
    };

    const dias = [];

    for (let i = 0; i < primerDiaSemana; i++) {
        dias.push(
            <div
                className="dia calendario-vacio"
                key={`vacio-${i}`}
            />
        );
    }

    for (let dia = 1; dia <= cantidadDias; dia++) {

        dias.push(
            <div
                className={`dia ${esHoy(dia) ? "dia-hoy" : ""}`}
                key={dia}
            >
                {dia}
            </div>
        );
    }

    return (
        <div className="calendario">

            <div className="calendario-header">

                <button
                    onClick={() => cambiarMes("anterior")}
                >
                    ‹
                </button>

                <h2>
                    {nombresMeses[mes]} {anio}
                </h2>

                <button
                    onClick={() => cambiarMes("siguiente")}
                >
                    ›
                </button>

            </div>

            <div className="dias-semana">

                {diasSemana.map((dia, index) => (
                    <div key={index}>
                        {dia}
                    </div>
                ))}

            </div>

            <div className="dias-calendario">
                {dias}
            </div>

        </div>
    );
}

export default Calendario;