import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import UsuarioInforme from '../usuarios/UsuarioInforme';
import Home from './../comun/Home';
import UsuariosListado from './../usuarios/UsuariosListado';


const MenuRutas = () => {
    return (
        <Router>
            Posible menu
            <Routes>
                <Route exact path="/" element={ <Home /> } />
                <Route exact path="/user" element={ <UsuariosListado /> } />
                <Route path="/user/:id" element={ <UsuarioInforme /> } />
            </Routes>
        </Router>
    );
};
export default MenuRutas;
