
import './App.css';
import Formulario from './Componentes/Formulario';

function App() {
  return (
    <div >
      <Formulario dato="de entrada" claseForm="formucss" claseCampo="campocss" campoLength="20">
      <hr/>
        <button type="submit">Enviar</button>
        <button type="cancel">Cancelar</button>
      </Formulario>
    </div>
  );
}

export default App;
