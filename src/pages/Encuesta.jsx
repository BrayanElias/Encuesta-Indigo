import useEncuesta from '../hooks/useEncuesta';
import ColaboradorSelector from '../components/ColaboradorSelector';
import Boton from '../components/Boton';

const Encuesta = () => {
    const { selectedColaborador, avanzarPagina } = useEncuesta();

    return (
        <div className="flex flex-col items-center justify-normal w-full h-screen bg-white text-primaryColor">
            <img className="w-[150px] h-auto rounded-xl mt-7 mb-20" src="./images/logo.png" alt="Logo" />
            <h1 className="text-4xl font-medium text-center mb-5">Hola Alexandra!</h1>
            <p className="text-lg text-center mb-20 px-10 max-w-4xl">
                Has sido seleccionado para evaluar a los siguientes <span className="font-bold">colaboradores en sus responsabilidades.</span> <br />
                Por favor contestar las preguntas de forma objetiva tomando en cuenta <span className="font-semibold">interacción</span> y el <span className="font-semibold">servicio</span> que has recibido <span className="font-semibold">durante el año 2024</span>.
            </p>
            <ColaboradorSelector />
            <Boton onClick={avanzarPagina} className="mt-14">
                Evaluar <img src="/images/arrowright.svg" alt="Arrow Right" />
            </Boton>
        </div>
    );
};

export default Encuesta;
