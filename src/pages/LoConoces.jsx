import useEncuesta from '../hooks/useEncuesta';
import Boton from '../components/Boton';

const LoConoces = () => {
    const { selectedColaborador, avanzarPagina, retrocederPagina } = useEncuesta();

    return (
        <div className="text-primaryColor flex flex-col items-center justify-center w-full h-screen bg-white">
            {/* Botón de regresar */}
            <button
                onClick={retrocederPagina}
                className="absolute top-10 left-10 flex items-center text-primaryColor border
                            border-[#3866F4] rounded-full px-4 py-2">
                <img src="/images/arrow-left.svg" alt="Volver" className="mr-2" />
                Volver
            </button>

            {/* Logo */}
            <img className="w-[150px] h-auto rounded-xl mt-7 mb-20" src="./images/logo.png" alt="Logo" />

            {/* Pregunta dinámica */}
            <h2 className="text-2xl font-normal text-center mb-8">
                ¿Conoces las actividades desempeñadas por <span className='font-medium'>{selectedColaborador}</span>?
            </h2>

            {/* Opciones de respuesta */}
            <div className="flex space-x-4 mb-10">
                <label className="flex items-center space-x-2">
                    <input type="radio" name="conoces" value="si" className="form-radio text-blue-600" />
                    <span>Sí</span>
                </label>
                <label className="flex items-center space-x-2">
                    <input type="radio" name="conoces" value="no" className="form-radio text-blue-600" />
                    <span>No</span>
                </label>
                <label className="flex items-center space-x-2">
                    <input type="radio" name="conoces" value="no-debo" className="form-radio text-blue-600" />
                    <span>He coordinado con la persona, pero no debo ser evaluador.</span>
                </label>
            </div>

            {/* Botón continuar */}
            <Boton onClick={avanzarPagina} className="bg-blue-600 text-white px-8 py-3 rounded-full">
                Continuar <img src="/images/arrowright.svg" alt="Arrow Right" className="inline ml-2" />
            </Boton>

            {/* Nombres de los colaboradores */}
            <div className="absolute bottom-5 w-full flex justify-between px-10 text-gray-400 text-sm">
                <span>{selectedColaborador}</span>
                <span>Manuel Zorochaqui</span>
                <span>Carlos Palma</span>
            </div>
        </div>
    );
};

export default LoConoces;
