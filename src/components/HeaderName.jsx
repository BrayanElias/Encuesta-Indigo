import useEncuesta from "../hooks/useEncuesta"

const HeaderName = () => {
    const { nombreAleatorio } = useEncuesta()
    return (
        <p className="absolute top-10 md:top-12 right-4 md:right-12 flex items-center text-primaryColor font-medium px-4 py-2">
            {nombreAleatorio}
        </p>
    )
}

export default HeaderName
