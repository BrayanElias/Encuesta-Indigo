import { EncuestaProvider } from './context/EncuestaContext';
import Encuesta from './pages/Encuesta';



function App() {
  return (
    <EncuestaProvider>
      <Encuesta />
    </EncuestaProvider>
  );
}

export default App;
