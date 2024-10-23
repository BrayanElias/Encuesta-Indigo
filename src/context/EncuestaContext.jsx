import { createContext, useState } from 'react';

export const EncuestaContext = createContext();

export const EncuestaProvider = ({ children }) => {
    // Estado para el colaborador seleccionado
    const [selectedColaborador, setSelectedColaborador] = useState(null);

    // Estado para controlar en qué página de preguntas estamos
    const [paginaActual, setPaginaActual] = useState(0);

    // Estado para guardar las respuestas
    const [respuestas, setRespuestas] = useState([]);

    // Función para avanzar a la siguiente página
    const avanzarPagina = () => {
        setPaginaActual((prev) => prev + 1);
    };

    // Función para retroceder a la página anterior
    const retrocederPagina = () => {
        setPaginaActual((prev) => (prev > 0 ? prev - 1 : prev));
    };

    // Función para seleccionar el colaborador
    const seleccionarColaborador = (colaborador) => {
        setSelectedColaborador(colaborador);
    };

    // Función para guardar las respuestas
    const guardarRespuesta = (respuesta) => {
        const nuevasRespuestas = [...respuestas];
        nuevasRespuestas[paginaActual] = respuesta;
        setRespuestas(nuevasRespuestas);
    };

    return (
        <EncuestaContext.Provider
            value={{
                selectedColaborador,
                seleccionarColaborador,
                paginaActual,
                avanzarPagina,
                retrocederPagina,
                respuestas,
                guardarRespuesta,
            }}
        >
            {children}
        </EncuestaContext.Provider>
    );
};
