
import { Provider } from 'react-redux';
import { StoreCarro } from './componentes/componentesRedux/StoreCarro';

import './App.css';
import Pedido from './componentes/Pedido';

function App() {
  return (
    <Provider store={ StoreCarro }>
      <div style={ { margin: '5em auto', width: '80%' } }>
        <Pedido />
      </div>
    </Provider>
  );
}

export default App;
