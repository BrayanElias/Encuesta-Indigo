import useEncuesta from '../hooks/useEncuesta';

const ColaboradorSelector = () => {
  const {
    seleccionarColaborador,
    selectedColaborador,
    colaboradores,
    colaboradoresCompletados
  } = useEncuesta();

  return (
    <div className="flex flex-col gap-2 md:flex-row">
      {colaboradores.map((colaborador) => (
        <label
          key={colaborador}
          className={`uppercase text-sm font-medium mr-4 px-7 py-5 drop-shadow
         border rounded-full cursor-pointer ${selectedColaborador === colaborador ? 'border-blue-500' : 'border-gray-300'} ${colaboradoresCompletados.includes(colaborador) ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <input
            type="radio"
            name="colaborador"
            value={colaborador}
            onChange={() => {
              if (!colaboradoresCompletados.includes(colaborador)) {
                seleccionarColaborador(colaborador);
              }
            }}
            className="mr-2"
            disabled={colaboradoresCompletados.includes(colaborador)} // Desactiva el input si el colaborador está completado
          />
          {colaborador}
        </label>
      ))}
    </div>
  );
};

export default ColaboradorSelector;
