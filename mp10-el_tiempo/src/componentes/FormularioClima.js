import React from 'react'

const FormularioClima = props => (
    <div className=".card car-body">
        <form onSubmit={ props.origen }>
            <div className="form-group">
                <input type="text"
                    name="city"
                    placeholder="Nombre de la ciudad"
                    className="form-control"
                    autoFocus
                />
            </div>
            <div className="form-group">
                <input type="text"
                    name="country"
                    placeholder="Nombre del pais"
                    className="form-control"
                />
                <button className="btn btn-success btn-block">
                    Pulse para obtener informacion
                </button>
            </div>
        </form>
    </div>
)

export default FormularioClima