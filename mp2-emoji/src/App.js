import React from 'react';
import './App.css';
import Instrucciones from './Componentes/Instrucciones/Instrucciones';

const displayEmojiName = event => alert(event.target.id);
const emojis = [
  {
    emoji: '😀',
    name: "sonrisitas"
  },
  {
    emoji: '🏃‍♀️',
    name: "corre corre"
  },
  {
    emoji: '☠️',
    name: "pirata"
  }
];

function App() {
  const greeting = "greeting";
  const displayAction = false;
  return(  
    <div className="container">
      <h1 id={greeting}>Hola Mundo</h1>
      <Instrucciones />
      {displayAction && <p>I am writing JSX</p>}
      <ul>
        {
          emojis.map(emoji => (
            <li key={emoji.name}> 
              <button
                onClick={displayEmojiName}
              >
                <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App;