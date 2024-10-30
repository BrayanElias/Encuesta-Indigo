import useEncuesta from "../hooks/useEncuesta";

const BackPageButton = () => {
    const { retrocederPagina } = useEncuesta();

    return (
        <button
            onClick={retrocederPagina}
            className="absolute top-10 md:top-12 left-4 md:left-10 flex items-center text-primaryColor border border-[#3866F4] rounded-full px-4 py-2">
            <img src="/images/arrow-left.svg" alt="Volver" className="mr-2" />
            Volver
        </button>
    )
}

export default BackPageButton
