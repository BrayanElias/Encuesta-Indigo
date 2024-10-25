import { useState } from 'react';
import useEncuesta from '../hooks/useEncuesta';
import Boton from '../components/Boton';
import ColaboradorFooter from '../components/ColaboradorFooter';
import OpcionesConoces from '../components/OpcionesConoces';

const LoConoces = () => {
    const { selectedColaborador, avanzarPagina, retrocederPagina, colaboradores, paginaActual, guardarRespuesta } = useEncuesta();
    const otrosColaboradores = colaboradores.filter(c => c !== selectedColaborador);

    const [respuestaSeleccionada, setRespuestaSeleccionada] = useState('');

    const handleEvaluarClick = () => {
        if (!respuestaSeleccionada) {
            alert('Por favor, elige una respuesta');
        } else {
            // Guardar la respuesta seleccionada en el contexto y avanzar de página
            guardarRespuesta(paginaActual, { respuesta: respuestaSeleccionada });
            avanzarPagina();
            console.log(respuestaSeleccionada);
        }
    };

    return (
        <>
            {paginaActual === 1 && (
                <div className="text-primaryColor flex flex-col items-center justify-center w-full h-screen bg-white">
                    <button
                        onClick={retrocederPagina}
                        className="absolute top-10 left-10 flex items-center text-primaryColor border border-[#3866F4] rounded-full px-4 py-2">
                        <img src="/images/arrow-left.svg" alt="Volver" className="mr-2" />
                        Volver
                    </button>
                    <p className="absolute top-10 right-12 flex items-center text-primaryColor font-medium px-4 py-2">
                        Alexandra
                    </p>

                    <img className="w-24 h-16 mt-10 mb-10 rounded-xl" src="./images/logo.png" alt="Logo" />

                    <h2 className="text-2xl font-normal text-center mb-8">
                        ¿Conoces las actividades desempeñadas por <span className="font-medium">{selectedColaborador}</span>?
                    </h2>

                    <OpcionesConoces onRespuestaSeleccionada={setRespuestaSeleccionada} />

                    <Boton onClick={handleEvaluarClick} className="bg-blue-600 text-white px-8 py-3 rounded-full">
                        Continuar <img src="/images/arrowright.svg" alt="Arrow Right" className="inline ml-2" />
                    </Boton>

                    <ColaboradorFooter
                        selectedColaborador={selectedColaborador}
                        otrosColaboradores={otrosColaboradores} />
                </div>
            )}
        </>
    );
};

export default LoConoces;
