
import './App.css';
import {useState} from "react";
import Titulo from './Componentes/Titulo';
import Formulario from './Componentes/Formulario';
import ListaTareas from './Componentes/ListaTareas';

function App() {
  const [list, setList] = useState([]);

  const handleAddItem = addItem => {
    setList([...list, addItem]);
  };

  return (
    <div className="container">
      <div className="m-0 w-100 h-100  row justify-content-center">
        <div className='col-auto w-100 p-5'>
          <Titulo propietario="Miguel" />
          <hr/>
          <Formulario propietario="Miguel" handleAddItem={handleAddItem} />
          <ListaTareas propietario="Miguel" lista={list} setList={setList}/>
        </div>
      </div>
    </div>
  );
}

export default App;
