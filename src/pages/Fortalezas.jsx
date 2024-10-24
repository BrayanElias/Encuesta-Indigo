import { useState } from "react";
import useEncuesta from "../hooks/useEncuesta";
import ColaboradorFooter from "../components/ColaboradorFooter";
import Boton from "../components/Boton";
import StartRating from "../components/StartRating"

const Fortalezas = () => {
    const { selectedColaborador, colaboradores ,retrocederPagina} = useEncuesta();
    const otrosColaboradores = colaboradores.filter(c => c !== selectedColaborador);

    const [fortalezas, setFortalezas] = useState(''); // Estado para el primer textarea
    const [oportunidades, setOportunidades] = useState(''); // Estado para el segundo textarea


    const handleEvaluarClick = () => {
        console.log('Botón "Continuar" clickeado');
        // Aquí puedes manejar la lógica para avanzar de página o cualquier otra acción.
    };

    return (
        <div className="flex flex-col items-center justify-start h-screen bg-gray-100">
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
            <h1 className="text-xl mb-10 text-center">Escribe las fortalezas y oportunidades de mejora.</h1>

            <div className="flex space-x-4  justify-center w-3/5">
                <div className='w-full relative'>
                    <p className='absolute -top-2 left-6 bg-white px-3 text-blue-500 text-sm font-medium rounded-xl'>Fortalezas</p>
                    <textarea
                        value={fortalezas}
                        onChange={(e) => setFortalezas(e.target.value)} // Maneja el cambio en el primer textarea
                        placeholder="Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500..."
                        className="text-xs outline-none border hover:border-blue-500 transition-all duration-500 cursor-pointer rounded-lg p-6 resize-none overflow-hidden w-full h-40"
                    />
                </div>
                <div className='relative w-full'>
                    <p className='absolute -top-2 left-6 bg-white px-3 text-blue-500 text-sm font-medium rounded-xl'>Oportunidades de mejora</p>
                    <textarea
                        value={oportunidades}
                        onChange={(e) => setOportunidades(e.target.value)} // Maneja el cambio en el segundo textarea
                        className="text-xs outline-none border hover:border-blue-500 transition-all duration-500 cursor-pointer rounded-lg p-6 resize-none w-full h-40 overflow-hidden"
                    />
                </div>
            </div>
            <div>
                <h1 className="text-xl mb-5 mt-10">¿Qué tan satisfecho te sientes con el desempeño de <span className='font-medium'>{selectedColaborador}</span>?</h1>
                <StartRating />
            </div>

            <Boton onClick={handleEvaluarClick} className="mt-5 bg-blue-600 text-white px-8 py-3 rounded-full">
                Continuar <img src="/images/arrowright.svg" alt="Arrow Right" className="inline ml-2" />
            </Boton>

            <ColaboradorFooter selectedColaborador={selectedColaborador} otrosColaboradores={otrosColaboradores} />
        </div>
    );
};

export default Fortalezas;
