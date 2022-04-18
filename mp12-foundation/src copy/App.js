import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GestorBuscador from './componentes/buscador/GestorBuscador'
import Detalle from './componentes/paginas/Detalle';
import NotFound from './componentes/paginas/NotFound';


// import components
import { Button, Colors } from 'react-foundation';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <GestorBuscador /> } />
        <Route path='/detalle/:id' element={ <Detalle /> } />
        <Route element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
// npm install react-router-dom --save
// npm install react-foundation --save
// npm install foundation-sites --save
// npm install react-foundation-components --save 
// npm install -g sass --save