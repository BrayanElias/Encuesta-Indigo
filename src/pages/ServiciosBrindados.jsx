import { useState } from 'react';
import useEncuesta from "../hooks/useEncuesta";
import ColaboradorFooter from "../components/ColaboradorFooter";
import Boton from "../components/Boton";
import SatisfactionButtons from "../components/SatisfactionButtons"
import HeaderName from "../components/HeaderName"
import BackPageButton from "../components/BackPageButton"

const ServiciosBrindados = () => {
    const { selectedColaborador, colaboradores, preguntasServiciosBrindados, avanzarPagina } = useEncuesta();
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
        <div className="container">
            <BackPageButton />
            <HeaderName />
            <img className="logo-class" src="./images/logo.png" alt="Logo" />
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
                            <SatisfactionButtons
                                index={index}
                                respuestas={respuestas}
                                handleSatisfaccion={handleSatisfaccion}
                            />
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
