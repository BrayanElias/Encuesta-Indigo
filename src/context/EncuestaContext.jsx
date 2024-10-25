/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const EncuestaContext = createContext();

export const EncuestaProvider = ({ children }) => {
    const [selectedColaborador, setSelectedColaborador] = useState(null);
    const [paginaActual, setPaginaActual] = useState(0);
    const colaboradores = ['Carlos Palma', 'Jhonathan Quispe', 'Manuel Zorochaqui'];

    const preguntasServiciosBrindados = [
        'Pregunta dinámica número 1',
        'Pregunta dinámica más larga número 2',
        'Pregunta dinámica mas o menos larga  número 3',
    ];

    const aspectos = [
        'La amabilidad, trato cordial y atento',
        'La resolución e informe del estatus a sus solicitudes de manera clara y comprensible',
        'El seguimiento adecuado a las tareas y pendientes',
        'La proactividad al adelantarse a sus requerimientos y necesidades',
        'La gestión y la disposición al atender sus consultas',
        'La calidad del servicio y sus entregables',
        'El cumplimiento y entrega oportuna de los compromisos adquiridos',
        'El conocimiento necesario para el desempeño de su cargo',
        'Conocen y cumplen con sus procedimientos'
    ];

    const resetColaborador = () => {
        setSelectedColaborador(null);  // Limpiar la selección
    };

    const avanzarPagina = () => {
        setPaginaActual((prev) => {
            console.log('Avanzar página. Página actual:', prev + 1);  // Depuración
            return prev + 1;
        });
    };

    const retrocederPagina = () => {
        if (paginaActual === 1) {
            setSelectedColaborador(null);
        }
        setPaginaActual((prev) => prev - 1);
    };

    const seleccionarColaborador = (colaborador) => {
        setSelectedColaborador(colaborador);
    };

    return (
        <EncuestaContext.Provider
            value={{
                selectedColaborador,
                seleccionarColaborador,
                paginaActual,
                avanzarPagina,
                retrocederPagina,
                colaboradores,
                aspectos,
                preguntasServiciosBrindados,
                resetColaborador
            }}
        >
            {children}
        </EncuestaContext.Provider>
    );
};
