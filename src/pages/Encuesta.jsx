import useEncuesta from '../hooks/useEncuesta';
import ColaboradorSelector from '../components/ColaboradorSelector';
import Boton from '../components/Boton';
import LoConoces from './LoConoces';
import Satisfaccion from './Satisfaccion';
import ServiciosBrindados from './ServiciosBrindados';
import Fortalezas from "./Fortalezas"
import Gracias from './Gracias';

const Encuesta = () => {
  const { selectedColaborador, avanzarPagina, paginaActual, guardarRespuestaPagina, nombreAleatorio } = useEncuesta();

  const handleEvaluarClick = () => {
    if (!selectedColaborador) {
      alert('Por favor, elige un colaborador');
    } else {
      guardarRespuestaPagina(paginaActual, { respuesta: selectedColaborador });
      avanzarPagina();
    }
  };

  return (
    <>
      {paginaActual === 0 && (
        <div className="container">
          <img className="logo-class" src="./images/logo.png" alt="Logo" />
          <h1 className="saludo-heading">Hola {nombreAleatorio} !</h1>
          <p className="evaluation-instructions">
            Has sido seleccionado para evaluar a los siguientes <span className="font-bold">colaboradores en sus responsabilidades.</span> <br />
            Por favor contestar las preguntas de forma objetiva tomando en cuenta <span className="font-semibold">interacción</span> y el <span className="font-semibold">servicio</span> que has recibido <span className="font-semibold">durante el año 2024</span>.
          </p>
          <ColaboradorSelector />
          <Boton onClick={handleEvaluarClick} className='button-continuar'>
            Evaluar
            <img src="/images/arrowright.svg" alt="Arrow Right" />
          </Boton>
        </div>
      )}

      {paginaActual === 1 && <LoConoces />}
      {paginaActual === 2 && <Satisfaccion />}
      {paginaActual === 3 && <ServiciosBrindados />}
      {paginaActual === 4 && <Fortalezas />}
      {paginaActual === 5 && <Gracias />}
    </>
  );
};

export default Encuesta;
