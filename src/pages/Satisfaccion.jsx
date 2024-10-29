import { useState } from 'react';
import useEncuesta from "../hooks/useEncuesta";
import ColaboradorFooter from "../components/ColaboradorFooter";
import Boton from "../components/Boton";
import BackPagButton from "../components/BackPageButton"
import HeaderName from "../components/HeaderName"
import SatisfactionButtons from '../components/SatisfactionButtons';

const Satisfaccion = () => {
  const { selectedColaborador, colaboradores, aspectos, avanzarPagina } = useEncuesta();

  const otrosColaboradores = colaboradores.filter(c => c !== selectedColaborador);
  const [respuestas, setRespuestas] = useState({}); // Objeto para almacenar las respuestas seleccionadas

  const handleSatisfaccion = (index, satisfaccion) => {
    setRespuestas(prev => ({ ...prev, [index]: satisfaccion })); // Almacena la respuesta seleccionada
  };


  const handleEvaluarClick = () => {
    const totalAspectos = aspectos.length;
    const respuestasCompletas = Object.keys(respuestas).length === totalAspectos;
    if (respuestasCompletas) {
      avanzarPagina();
      console.log(respuestas);
    } else {
      alert('Por favor, responde todas las preguntas antes de continuar.');
    }
  };


  return (
    <div className="container">
      <BackPagButton />
      <HeaderName />
      <img className="logo-class" src="./images/logo.png" alt="Logo" />
      <h1 className="text-xl font-normal mb-2 text-center">¿Qué tan satisfecho te sientes en los siguiente aspectos?</h1>

      <div className="w-full max-w-4xl"> {/* Contenedor para limitar el ancho */}
        {aspectos.map((aspecto, index) => (
          <div key={index} className="flex items-center justify-between">
            {/* Aplicar tachado si se ha seleccionado una respuesta */}
            <p className={`text-left w-2/3 text-sm ${respuestas[index] ? 'line-through text-blue-500' : ''}`}>
              {aspecto}
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
      <Boton onClick={handleEvaluarClick} className="button-continuar">
        Continuar <img src="/images/arrowright.svg" alt="Arrow Right" className="inline ml-2" />
      </Boton>
      <ColaboradorFooter
        selectedColaborador={selectedColaborador}
        otrosColaboradores={otrosColaboradores} />
    </div>
  );
};

export default Satisfaccion;
