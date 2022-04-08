import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Button, Form } from 'reactstrap';

export default class Formulario extends Component {
    static propTypes = { propietario: PropTypes.string.isRequired }

    constructor(props) {
        super(props);
        this.state = {
            tareaNueva: ''
        }
    }


    handleSubmit = e => {
        e.preventDefault();
        console.log("Tarea:" + this.state.tareaNueva);

        this.props.handleAddItem({
            done: false,
            id: (+new Date()).toString(),
            description:this.state.tareaNueva
          });


        this.setState({ tareaNueva: "" })
    };


    render() {
        let { propietario } = this.props;
        return (
            <div>
                <h3>Tarea para { propietario }</h3>
                <Form className="w-100" onSubmit={ this.handleSubmit }>
                    <div className="input-group mb-3">

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Tarea a realizar"
                            aria-label="Tarea a realizar"
                            value={ this.state.tareaNueva }
                            onChange={ e => this.setState({ tareaNueva: e.target.value }) }
                        />
                        <Button
                            className="btn btn-outline-secondary"
                            type="submit"
                            disabled={ this.state.tareaNueva === "" }
                        >
                            +
                        </Button>
                    </div>
                </Form>


            </div >
        )
    }

}
