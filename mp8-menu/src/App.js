
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './paginas/Home';
import About from './paginas/About';
import Navegacion from './componentes/Navegacion';

function App() {
  return (
    <BrowserRouter>
    <Navegacion/>
      <Routes>
        <Route  exact path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
