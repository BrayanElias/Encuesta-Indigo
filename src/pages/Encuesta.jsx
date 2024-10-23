import useEncuesta from '../hooks/useEncuesta';
import ColaboradorSelector from '../components/ColaboradorSelector';
import Boton from '../components/Boton';
import LoConoces from './LoConoces'; 

const Encuesta = () => {
    const { selectedColaborador, avanzarPagina, paginaActual } = useEncuesta();

    const handleEvaluarClick = () => {
        if (!selectedColaborador) {
            alert('Por favor, elige un colaborador');
        } else {
            avanzarPagina();
        }
    };

    return (
        <>
            {paginaActual === 0 && (
                <div className="flex flex-col items-center justify-normal w-full h-screen bg-white text-primaryColor">
                    <img className="w-[150px] h-auto rounded-xl mt-7 mb-20" src="./images/logo.png" alt="Logo" />
                    <h1 className="text-4xl font-medium text-center mb-5">Hola Alexandra!</h1>
                    <p className="text-lg text-center mb-20 px-10 max-w-4xl">
                        Has sido seleccionado para evaluar a los siguientes <span className="font-bold">colaboradores en sus responsabilidades.</span> <br />
                        Por favor contestar las preguntas de forma objetiva tomando en cuenta <span className="font-semibold">interacción</span> y el <span className="font-semibold">servicio</span> que has recibido <span className="font-semibold">durante el año 2024</span>.
                    </p>
                    <ColaboradorSelector />
                    <Boton onClick={handleEvaluarClick} className="mt-14">
                        Evaluar
                        <img src="/images/arrowright.svg" alt="Arrow Right" />
                    </Boton>
                </div>
            )}

            {paginaActual === 1 && <LoConoces />} {/* Mostrar la segunda página si estamos en la página 1 */}
        </>
    );
};

export default Encuesta;
