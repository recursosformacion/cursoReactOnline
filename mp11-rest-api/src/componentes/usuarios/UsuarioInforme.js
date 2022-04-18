import React, {useState} from 'react'
import { useParams } from 'react-router-dom'

export default function UsuarioInforme() {

  const [usuario, setData] = useState('');
  const params = useParams();

  console.log(usuario)

  if (usuario == '') {
    const apiUrl = "https://dummy.restapiexample.com/api/v1/employee/" + params.id
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setData(data.data)

      })
  }



  return (
    <div>
    Usuario:{ usuario.id }<br/>
    Nombre: {usuario.employee_name}<br/>
    Salario:{usuario.employee_salary}<br/>
</div>
  )
}
