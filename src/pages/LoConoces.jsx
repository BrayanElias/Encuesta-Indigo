import { useState } from 'react';
import useEncuesta from '../hooks/useEncuesta';
import Boton from '../components/Boton';
import ColaboradorFooter from '../components/ColaboradorFooter';
import OpcionesConoces from '../components/OpcionesConoces';
import BackPageButton from '../components/BackPageButton';
import HeaderName from '../components/HeaderName';

const LoConoces = () => {
  const {
    selectedColaborador,
    avanzarPagina,
    colaboradores,
    paginaActual,
    guardarRespuestaPagina,
    progreso
  } = useEncuesta();

  const otrosColaboradores = colaboradores.filter(c => c !== selectedColaborador);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState('');

  const handleEvaluarClick = () => {
    if (!respuestaSeleccionada) {
      alert('Por favor, elige una respuesta');
    } else {
      guardarRespuestaPagina(paginaActual, { respuesta: respuestaSeleccionada });
      avanzarPagina();
      console.log(progreso);
    }
  };

  return (
    <>
      {paginaActual === 1 && (
        <div className="container">
          <BackPageButton />
          <HeaderName />
          <img className="logo-class" src="./images/logo.png" alt="Logo" />
          <h2 className="text-2xl font-normal text-center mb-8">
            ¿Conoces las actividades desempeñadas por <span className="font-medium">{selectedColaborador}</span>?
          </h2>
          <OpcionesConoces onRespuestaSeleccionada={setRespuestaSeleccionada} />
          <Boton onClick={handleEvaluarClick} className="button-continuar">
            Continuar
            <img src="/images/arrowright.svg" alt="Arrow Right" className="inline ml-2" />
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
