import { useState } from "react";
import useEncuesta from "../hooks/useEncuesta";
import ColaboradorFooter from "../components/ColaboradorFooter";
import Boton from "../components/Boton";
import StartRating from "../components/StartRating";

const Fortalezas = () => {
    const { selectedColaborador, colaboradores, retrocederPagina, avanzarPagina } = useEncuesta();
    const otrosColaboradores = colaboradores.filter(c => c !== selectedColaborador);

    const [fortalezas, setFortalezas] = useState('');
    const [oportunidades, setOportunidades] = useState('');
    const [starRating, setStarRating] = useState(0); // Estado para la calificación de estrellas

    const handleEvaluarClick = () => {
        if (fortalezas.trim() === "" || oportunidades.trim() === "") {
            alert('Por favor, escribe algo en ambos campos');
            return;
        }
        if (starRating < 1) {
            alert('Por favor, selecciona una calificación ');
            return;
        }
        else {
            console.log(fortalezas);
            console.log(oportunidades);
            console.log(starRating);
            avanzarPagina()
        }
    };

    return (
        <div className="flex flex-col items-center justify-start h-screen bg-white text-primaryColor">
            <button
                onClick={retrocederPagina}
                className="absolute top-10 left-10 flex items-center text-primaryColor border border-[#3866F4] rounded-full px-4 py-2">
                <img src="/images/arrow-left.svg" alt="Volver" className="mr-2" />
                Volver
            </button>
            <p className="absolute top-10 right-12 flex items-center text-primaryColor font-medium px-4 py-2">
                Alexandra
            </p>
            <img className="w-24 h-16 mt-10 mb-10 rounded-xl" src="./images/logo.png" alt="Logo" />
            <h1 className="text-xl mb-10 text-center">Escribe las fortalezas y oportunidades de mejora.</h1>

            <div className="flex space-x-4 justify-center w-3/5">
                <div className='w-full relative'>
                    <p className='absolute -top-2 left-6 bg-white px-3 text-blue-500 text-sm font-medium rounded-xl'>Fortalezas</p>
                    <textarea
                        value={fortalezas}
                        onChange={(e) => setFortalezas(e.target.value)}
                        placeholder="Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500..."
                        className="text-xs outline-none border hover:border-blue-500 transition-all duration-500 cursor-pointer rounded-lg p-6 resize-none overflow-hidden w-full h-40"
                    />
                </div>
                <div className='relative w-full'>
                    <p className='absolute -top-2 left-6 bg-white px-3 text-blue-500 text-sm font-medium rounded-xl'>Oportunidades de mejora</p>
                    <textarea
                        value={oportunidades}
                        onChange={(e) => setOportunidades(e.target.value)}
                        className="text-xs outline-none border hover:border-blue-500 transition-all duration-500 cursor-pointer rounded-lg p-6 resize-none w-full h-40 overflow-hidden"
                    />
                </div>
            </div>
            <div>
                <h1 className="text-xl mb-5 mt-10">¿Qué tan satisfecho te sientes con el desempeño de <span className='font-medium'>{selectedColaborador}</span>?</h1>
                <StartRating onRatingChange={setStarRating} />
            </div>

            <Boton onClick={handleEvaluarClick} className="mt-5 bg-blue-600 text-white px-8 py-3 rounded-full">
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

export default Fortalezas;
