
import './App.css';
import Tarea from './components/Tarea';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <Tarea
        texto={'Estudiar React.js'}
        ></Tarea>
      </div>
    </div>
  );
}

export default App;
