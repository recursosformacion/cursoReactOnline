import React from 'react'
import {
    NavLink
} from 'react-router-dom';


export default function Navegacion() {

    const estilo = {
        padding: "2em",
        width: "10%",
        color: "white",
        textDecoration: "none"
    }
    const estiloact = {
        padding: "2em",
        width: "10%",
        textDecoration: "none",
        fontWeight: "bold",
        color: "yellow"
    }


    return (
        <nav style={ { backgroundColor: "red", color: "white", textDecoration: "none" } }>

            <NavLink to="/" style={ ({ isActive }) =>
                isActive
                    ? estiloact
                    : estilo
            }>Home</NavLink>
            <NavLink to="/about"
                style={ ({ isActive }) =>
                    isActive
                        ? estiloact
                        : estilo
                }>About</NavLink>
            <NavLink to="/posts" style={ ({ isActive }) =>
                isActive
                    ? estiloact
                    : estilo
            }>Posts</NavLink>

        </nav>
    )
}
