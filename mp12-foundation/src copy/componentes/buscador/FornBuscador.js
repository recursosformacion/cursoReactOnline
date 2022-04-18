import React, { Component } from 'react'

import { Grid, Cell, Button } from 'react-foundation';
import {
   
    FormField,
    FormFieldInput,
    FormFieldError,
    FormFieldInline,
    FormFieldButton,
  } from 'react-foundation-components/lib/forms';
  
import { API_PELI } from './../constantes';

export default class FormBuscador extends Component {

    state = {
        inputMovie: ''
    }

    handleChange = (e) => {
        this.setState({ inputMovie: e.target.value })
        console.log(e.target.value )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { inputMovie } = this.state;
        const ruta = API_PELI + `&s=${inputMovie}`
        console.log(ruta)
        fetch(ruta)
            .then(res => res.json())
            .then(results => {
                const { Response = "", Search = [], totalResults = "0" } = results;

                //if (Response !== "False") {
                this.props.onResult(Search);
                // }

            })
    }
    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <Grid>
                    <FormFieldInline>
                        <FormFieldInput
                            type="text"
                            placeholder="Titulo de la pelicula"
                            onChange={ this.handleChange } />

                        <FormFieldButton type="submit">
                            Buscar
                        </FormFieldButton>
                    </FormFieldInline>
                </Grid>
            </form>
        )
    }
}
