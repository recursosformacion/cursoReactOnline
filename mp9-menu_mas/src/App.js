
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './paginas/Home';
import About from './paginas/About';
import Navegacion from './componentes/Navegacion';
import Posts from './paginas/Posts';
import Post from './paginas/Post';

function App() {
  return (
    <BrowserRouter>
    <Navegacion/>
      <Routes>
        <Route  exact path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path="/posts" element={ <Posts /> } />
        <Route path="/post/:postId" element={ < Post /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
