/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const EncuestaContext = createContext();

export const EncuestaProvider = ({ children }) => {

  // Estado para almacenar el colaborador seleccionado (inicialmente null)
  const [selectedColaborador, setSelectedColaborador] = useState(null);

  // Estado para almacenar las respuestas de la encuesta
  const [respuestas, setRespuestas] = useState({});

  // Estado para rastrear la página actual en la encuesta (inicialmente 0)
  const [paginaActual, setPaginaActual] = useState(0);

  // Total de páginas en la encuesta (constante)
  const totalPaginas = 4;

  // Calcula el progreso de la encuesta en porcentaje basado en la página actual
  const progreso = (paginaActual / totalPaginas) * 100;

  // Lista de colaboradores que se pueden seleccionar en la encuesta
  const colaboradores = ['Carlos Palma', 'Jhonathan Quispe', 'Manuel Zorochaqui'];

  // Lista de colaboradores que completaron el 100% de progreso
  const [colaboradoresCompletados, setColaboradoresCompletados] = useState([]);

  // Función para volver a la página de selección de colaborador (página 1)
  const irAPaginaSeleccionColaborador = () => setPaginaActual(0);

  // Lista de preguntas relacionadas con los servicios brindados, que serán evaluadas
  const preguntasServiciosBrindados = [
    'Pregunta dinámica número 1',
    'Pregunta dinámica más larga número 2',
    'Pregunta dinámica mas o menos larga número 3',
  ];

  // Lista de aspectos específicos que serán evaluados en los colaboradores
  const aspectos = [
    'La amabilidad, trato cordial y atento',
    'La resolución e informe del estatus a sus solicitudes de manera clara y comprensible',
    'El seguimiento adecuado a las tareas y pendientes',
    'La proactividad al adelantarse a sus requerimientos y necesidades',
    'La gestión y la disposición al atender sus consultas',
    'La calidad del servicio y sus entregables',
    'El cumplimiento y entrega oportuna de los compromisos adquiridos',
    'El conocimiento necesario para el desempeño de su cargo',
    'Conocen y cumplen con sus procedimientos'
  ];

  // Función para restablecer el colaborador seleccionado a null
  const resetColaborador = () => {
    setSelectedColaborador(null);
  };

  // Función para avanzar a la siguiente página de la encuesta
  const avanzarPagina = () => {
    setPaginaActual((prevPagina) => {
      const nuevaPagina = prevPagina + 1;


      // Verificar si se alcanza el final de la encuesta
      if (nuevaPagina === totalPaginas) {
        setColaboradoresCompletados((prevCompletados) => {
          // Agregar el colaborador actual a la lista de completados solo si no está ya en ella
          if (!prevCompletados.includes(selectedColaborador)) {
            return [...prevCompletados, selectedColaborador];
          }
          return prevCompletados;
        });
      }
      return nuevaPagina;
    });
  };

  // Función para retroceder a la página anterior de la encuesta
  const retrocederPagina = () => {
    // Si estamos en la primera página, limpiar la selección de colaborador
    if (paginaActual === 1) {
      setSelectedColaborador(null);
    }
    setPaginaActual((prev) => prev - 1);
  };

  // Función para seleccionar un colaborador específico
  const seleccionarColaborador = (colaborador) => {
    // Solo permite seleccionar colaboradores que no están completados
    if (!colaboradoresCompletados.includes(colaborador)) {
      setSelectedColaborador(colaborador);
    } else {
      alert("Este colaborador ya ha sido evaluado completamente.");
    }
  };

  // Función para guardar la respuesta de una página específica
  const guardarRespuestaPagina = (pagina, respuesta) => {
    setRespuestas((prevRespuestas) => ({
      ...prevRespuestas,
      [selectedColaborador]: {
        ...prevRespuestas[selectedColaborador],
        [pagina]: respuesta,  // Asigna la respuesta a la página actual del colaborador seleccionado
      }
    }));
  };

  // Función para verificar si todos los colaboradores han completado la encuesta
  const verificarProgresoCompleto = () => {
    return colaboradoresCompletados.length === colaboradores.length;
  };

  return (
    <EncuestaContext.Provider
      value={{
        selectedColaborador,          // Colaborador actualmente seleccionado
        seleccionarColaborador,       // Función para seleccionar un colaborador
        paginaActual,                 // Página actual en la encuesta
        setPaginaActual,              // Función para establecer manualmente la página actual
        avanzarPagina,                // Función para avanzar a la siguiente página
        retrocederPagina,             // Función para retroceder a la página anterior
        colaboradores,                // Lista de colaboradores disponibles
        aspectos,                     // Lista de aspectos a evaluar
        preguntasServiciosBrindados,  // Preguntas sobre los servicios brindados
        resetColaborador,             // Función para restablecer el colaborador seleccionado
        respuestas,                   // Estado de las respuestas
        guardarRespuestaPagina,       // Función para guardar respuestas de una página
        totalPaginas,                 // Total de páginas en la encuesta
        irAPaginaSeleccionColaborador, // Función para ir a la selección de colaborador
        progreso,                     // Porcentaje de progreso en la encuesta
        colaboradoresCompletados,     // Lista de colaboradores que han completado la encuesta
        verificarProgresoCompleto,     // Función para verificar si todos han completado
      }}
    >
      {children}
    </EncuestaContext.Provider>
  );
};
