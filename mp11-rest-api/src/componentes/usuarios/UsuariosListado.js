import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class UsuariosListado extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        const apiUrl = "http://dummy.restapiexample.com/api/v1/employees"
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                this.setState({
                    data: data.data,
                })

            })
    }


    render() {
        return (
            <ul>
                <h2 className='list-head'>Nuestros usuarios</h2>
                { this.state.data && this.state.data.map((user) => {
                    return (
                        <li key={ user.id } className='list'>
                            <span className='repo-text'>{ user.id } </span>
                            <Link to={ `/user/${user.id}` }>
                                <span className='repo-description'>{ user.employee_name }</span>
                            </Link>
                        </li>
                    );
                }) }
            </ul>
        )
    }
}