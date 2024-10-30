import { useState } from "react";
import useEncuesta from "../hooks/useEncuesta";
import ColaboradorFooter from "../components/ColaboradorFooter";
import Boton from "../components/Boton";
import StartRating from "../components/StartRating";
import BackPageButton from "../components/BackPageButton";
import HeaderName from "../components/HeaderName";

const Fortalezas = () => {
  const {
    selectedColaborador,
    colaboradores,
    avanzarPagina,
    verificarProgresoCompleto,
    progreso,
    irAPaginaSeleccionColaborador,
    guardarRespuestaPagina,
    paginaActual
  } = useEncuesta();

  const [fortalezas, setFortalezas] = useState('');
  const [oportunidades, setOportunidades] = useState('');
  const [starRating, setStarRating] = useState(0);

  const handleEvaluarClick = () => {
    if (!fortalezas.trim() || !oportunidades.trim()) {
      return alert('Por favor, escribe algo en ambos campos');
    }
    if (starRating < 1) {
      return alert('Por favor, selecciona una calificación');
    }
    if (!verificarProgresoCompleto()) {
      alert("Por favor, completa todas las evaluaciones antes de continuar.");
      irAPaginaSeleccionColaborador();
      guardarRespuestaPagina(paginaActual, { respuesta: fortalezas, starRating, oportunidades });
    } else {
      avanzarPagina();
    }
  };

  return (
    <div className="container">
      <BackPageButton />
      <HeaderName />
      <img className="logo-class" src="./images/logo.png" alt="Logo" />
      <h1 className="text-xl mb-10 text-center">Escribe las fortalezas y oportunidades de mejora.</h1>
      <div className="flex space-x-4 justify-center w-full md:w-3/5">
        <div className="w-full relative">
          <p className="absolute -top-2 left-6 bg-white px-3 text-blue-500 text-sm font-medium rounded-xl">Fortalezas</p>
          <textarea
            value={fortalezas}
            onChange={(e) => setFortalezas(e.target.value)}
            placeholder="Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500..."
            className="text-xs outline-none border hover:border-blue-500 transition-all duration-500 cursor-pointer rounded-lg p-6 resize-none overflow-hidden w-full h-40"
          />
        </div>
        <div className="relative w-full">
          <p className="absolute -top-2 left-6 bg-white px-3 text-blue-500 text-sm font-medium rounded-xl">Oportunidades de mejora</p>
          <textarea
            value={oportunidades}
            onChange={(e) => setOportunidades(e.target.value)}
            placeholder="Escribe aquí tus oportunidades de mejora..."
            className="text-xs outline-none border hover:border-blue-500 transition-all duration-500 cursor-pointer rounded-lg p-10 md:p-6 resize-none w-full h-40 overflow-hidden"
          />
        </div>
      </div>
      <div>
        <h1 className="text-xl mb-5 mt-10 text-center">
          ¿Qué tan satisfecho te sientes con el desempeño de <span className='font-medium'>{selectedColaborador}</span>?
        </h1>
        <StartRating onRatingChange={setStarRating} />
      </div>
      <Boton onClick={handleEvaluarClick} className="button-continuar md:mt-6">
        Continuar <img src="/images/arrowright.svg" alt="Arrow Right" className="inline ml-2" />
      </Boton>
      <ColaboradorFooter
        progresoPorColaborador={progreso}
        selectedColaborador={selectedColaborador}
        otrosColaboradores={colaboradores.filter(c => c !== selectedColaborador)}
      />
    </div>
  );
};

export default Fortalezas;
