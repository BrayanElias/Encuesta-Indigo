/* eslint-disable react/prop-types */

const ColaboradorFooter = ({ selectedColaborador, otrosColaboradores, progresoPorColaborador }) => {
    return (
        <div className="absolute bottom-0 w-full flex justify-between text-sm gap-x-1">
            {/* Barra de progreso para el colaborador seleccionado */}
            <div className="flex flex-col items-center w-1/3">
                <span>{selectedColaborador}</span>
                <div className="w-full bg-gray-300 h-2 mt-1">
                    <div
                        className="bg-barFooterColor h-2 "
                        style={{ width: `${progresoPorColaborador[selectedColaborador]}%` }}
                    />
                </div>
            </div>

            {/* Barras de progreso para los otros colaboradores */}
            {otrosColaboradores.map((colaborador, index) => (
                <div className="flex flex-col items-center text-gray-400 w-1/3" key={index}>
                    <span>{colaborador}</span>
                    <div className="w-full bg-gray-300 h-2 mt-1">
                        <div
                            className="bg-barFooterColor h-2"
                            style={{ width: `${progresoPorColaborador[colaborador]}%` }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ColaboradorFooter;
