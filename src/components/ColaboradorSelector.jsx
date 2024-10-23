import useEncuesta from '../hooks/useEncuesta';

const ColaboradorSelector = () => {
    const { seleccionarColaborador, selectedColaborador } = useEncuesta();

    const colaboradores = ['Carlos Palma', 'Jhonathan Quispe', 'Manuel Zorochaqui'];

    return (
        <div>
            {colaboradores.map((colaborador) => (
                <label key={colaborador} className={`uppercase text-sm font-medium mr-4 px-7 py-5 border rounded-full cursor-pointer  ${selectedColaborador === colaborador ? 'border-blue-500' : 'border-gray-300'}`}>
                    <input
                        type="radio"
                        name="colaborador"
                        value={colaborador}
                        onChange={() => seleccionarColaborador(colaborador)}
                        className="mr-2"
                    />
                    {colaborador}
                </label>
            ))}
        </div>
    );
};

export default ColaboradorSelector;
