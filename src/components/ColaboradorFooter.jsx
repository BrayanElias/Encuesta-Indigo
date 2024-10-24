/* eslint-disable react/prop-types */

const ColaboradorFooter = ({ selectedColaborador, otrosColaboradores }) => {
    return (
        <div className="absolute bottom-5 w-full flex justify-between px-10 text-sm">
            <span>{selectedColaborador}</span>
            {otrosColaboradores.map((colaborador, index) => (
                <span className="text-gray-400" key={index}>
                    {colaborador}
                </span>
            ))}
        </div>
    );
};

export default ColaboradorFooter;
