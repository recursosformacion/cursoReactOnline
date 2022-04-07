
import React, { Component } from "react";
import InputElement from "./InputElement";


class Formulario extends Component {

    constructor(props){
        super(props);
        this.state={
            ok:true,
            display:''
        }
    }

    render() {
        let mensaje;
        if (this.state.ok === true){
            mensaje = "";
        } else {
            mensaje = "Todo mal"
        }
        let user= {
            nombre:"",
            password: ""
        }
        const {claseForm ,boton, ...resto} = this.props
        return (
            <div className={claseForm}>
                <h1>{this.props.dato} </h1>
                <form >
                <InputElement label="Usuario" type="text" valor={user.nombre} {...resto}/>
                <InputElement label="Contraseña" type="password" valor={user.password} { ...resto}/>
                <button type="submit"
                    onClick={ boton}>Enviar</button>
                </form>
                <p>{mensaje===""?null:'Mensaje:' + mensaje}</p>
                <p>{user.nombre}</p>
            </div>
        )
    }
}
export default Formulario;