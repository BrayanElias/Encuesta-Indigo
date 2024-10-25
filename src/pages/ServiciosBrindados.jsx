import { useState } from 'react';
import useEncuesta from "../hooks/useEncuesta";
import ColaboradorFooter from "../components/ColaboradorFooter";
import Boton from "../components/Boton";


const ServiciosBrindados = () => {
    const { retrocederPagina, selectedColaborador, colaboradores, preguntasServiciosBrindados, avanzarPagina } = useEncuesta();
    const otrosColaboradores = colaboradores.filter(c => c !== selectedColaborador);

    const [respuestas, setRespuestas] = useState({}); // Objeto para almacenar las respuestas seleccionadas

    const handleSatisfaccion = (index, satisfaccion) => {
        setRespuestas(prev => ({ ...prev, [index]: satisfaccion })); // Almacena la respuesta seleccionada
    };

    const handleEvaluarClick = () => {
        const totalServiciosBrindados = preguntasServiciosBrindados.length;
        const respuestasCompletas = Object.keys(respuestas).length === totalServiciosBrindados;

        if (respuestasCompletas) {
            console.log(respuestas);
            avanzarPagina();
        } else {
            alert('Por favor, responde todas las preguntas antes de continuar.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-start h-screen bg-white px-4 text-primaryColor">
            <button
                onClick={retrocederPagina}
                className="absolute top-10 left-10 flex items-center text-primaryColor border border-[#3866F4] rounded-full px-4 py-2">
                <img src="/images/arrow-left.svg" alt="Volver" className="mr-2" />
                Volver
            </button>
            <p
                className="absolute top-10 right-12 flex items-center text-primaryColor font-medium px-4 py-2">
                Alexandra
            </p>
            <img className="w-24 h-16 mt-10 mb-10  rounded-xl " src="./images/logo.png" alt="Logo" />
            <h1 className="text-xl font-normal mb-14 text-center">¿Qué tan satisfecho te sientes con los siguientes servicios brindados por <span className='font-medium'>{selectedColaborador}</span>?</h1>

            <div className="w-full max-w-4xl mb-16"> {/* Contenedor para limitar el ancho */}
                {preguntasServiciosBrindados.map((preguntaSB, index) => (
                    <div key={index} className="flex items-center justify-between">
                        {/* Aplicar tachado si se ha seleccionado una respuesta */}
                        <p className={`text-left w-2/3 text-sm ${respuestas[index] ? 'line-through text-blue-500' : ''}`}>
                            {preguntaSB}
                        </p>

                        <div className="flex w-1/3 justify-end">
                            {/* Botones para seleccionar satisfacción */}
                            <button
                                type="button"
                                className="text-xl p-1 rounded-full"
                                onClick={() => handleSatisfaccion(index, 'verysad')}
                            >
                                <img
                                    src="images/1.svg"
                                    alt=""
                                    style={{ filter: respuestas[index] === 'verysad' ? 'grayscale(0%)' : 'grayscale(100%)' }}
                                />
                            </button>

                            <button
                                type="button"
                                className="text-xl p-1 rounded-full"
                                onClick={() => handleSatisfaccion(index, 'sad')}
                            >
                                <img
                                    src="images/2.svg"
                                    alt=""
                                    style={{ filter: respuestas[index] === 'sad' ? 'grayscale(0%)' : 'grayscale(100%)' }}
                                />
                            </button>

                            <button
                                type="button"
                                className="text-xl p-1 rounded-full"
                                onClick={() => handleSatisfaccion(index, 'neutral')}
                            >
                                <img
                                    src="images/3.svg"
                                    alt=""
                                    style={{ filter: respuestas[index] === 'neutral' ? 'grayscale(0%)' : 'grayscale(100%)' }}
                                />
                            </button>

                            <button
                                type="button"
                                className="text-xl p-1 rounded-full"
                                onClick={() => handleSatisfaccion(index, 'happy')}
                            >
                                <img
                                    src="images/4.svg"
                                    alt=""
                                    style={{ filter: respuestas[index] === 'happy' ? 'grayscale(0%)' : 'grayscale(100%)' }}
                                />
                            </button>

                            <button
                                type="button"
                                className="text-xl p-1 rounded-full"
                                onClick={() => handleSatisfaccion(index, 'veryhappy')}
                            >
                                <img
                                    src="images/5.svg"
                                    alt=""
                                    style={{ filter: respuestas[index] === 'veryhappy' ? 'grayscale(0%)' : 'grayscale(100%)' }}
                                />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <Boton onClick={handleEvaluarClick} className="bg-blue-600 text-white px-8 py-3 rounded-full">
                Continuar <img src="/images/arrowright.svg" alt="Arrow Right" className="inline ml-2" />
            </Boton>

            <ColaboradorFooter
                progresoPorColaborador={{
                    'Colaborador 1': 10,
                    'Colaborador 2': 40,
                    'Colaborador 3': 90
                }}
                selectedColaborador={selectedColaborador} otrosColaboradores={otrosColaboradores} />
        </div>
    );
};

export default ServiciosBrindados;
