/* eslint-disable react/prop-types */

const Boton = ({ onClick, children, className = "" }) => {
    return (
        <button
            className={`text-xl font-medium gap-x-2 px-9 py-4 mt-5 md:mt-14 bg-blue-500 text-white rounded-full flex items-center transform transition-transform duration-150 ease-in-out active:scale-95 ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Boton;
