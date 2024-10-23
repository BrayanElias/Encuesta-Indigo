import { createContext, useState } from 'react';

export const EncuestaContext = createContext();

export const EncuestaProvider = ({ children }) => {
    const [selectedColaborador, setSelectedColaborador] = useState(null);
    const [paginaActual, setPaginaActual] = useState(0);

    const avanzarPagina = () => {
        setPaginaActual((prev) => prev + 1);
    };

    const retrocederPagina = () => {
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
            }}
        >
            {children}
        </EncuestaContext.Provider>
    );
};
