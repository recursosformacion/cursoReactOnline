
import './App.css';
import Formulario from './Componentes/Formulario';

function App() {
function login(e){
  alert("Han hecho login")
}

  return (
    <div >
      <Formulario
        dato="Login"
        claseForm="formucss"
        claseCampo="campocss"
        campoLength="20"
        boton = {login}
      >

      </Formulario>
    </div>
  );
}

export default App;
