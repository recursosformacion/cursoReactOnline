import React, { Component } from 'react'
import {Link} from 'react-router-dom';


export default class MontaPoster extends Component {
    
    render() {
        
        const linea = this.props.linea
        return (
            <Link to={`/detalle/${linea.imdbID}`}  key={linea.imdbID}>
                <div>
                    <figure >
                        <img style={{heigth:'80%'}}
                            src={linea.Poster}
                            alt={linea.Title}
                        />
                    </figure>
                </div>
                <div >
                    <div >
                        <div >
                            <p > {linea.Title}</p>
                            <p >{linea.Year}</p>
                        </div>
                    </div>


                </div>
            </Link>
        )
    }
}