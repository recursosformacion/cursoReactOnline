import React,  { useState } from 'react'
import { useParams } from 'react-router-dom';
import { API_PELI } from '../constantes';

export default function Detalle() {
 

  const [pelicula, setPelicula] = useState('');

  const {id} = useParams();
  const goBack = () => window.history.back();
  const ruta = API_PELI + `&i=${id}`

  if (pelicula === '') {
    fetch(ruta)
      .then(res => res.json())
      .then(pelicula => {
        console.log(pelicula)
        setPelicula(pelicula)

      })
  }

  if (!pelicula)
    return <h1>Cargando...</h1>
  if (pelicula.Response == false) {
    return <h1>pelicula.Error</h1>
  }

  const estilo = {
    width: '30%',
    minWidth: '25em',
    margin: '3em auto',
    padding:'1em',
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
  };

  const { Title, Poster, Actors, Metascore, Plot } = pelicula;
  return (
    <div className='card'  style={ estilo }>
      <button onClick={ goBack }>Volver</button>
      <h1>{ Title }</h1>
      <img
        alt={ Title }
        src={ Poster } />
      <h3>{ Actors }</h3>
      <span>{ Metascore }</span>
      <p>{ Plot }</p>
    </div>
  )



}
