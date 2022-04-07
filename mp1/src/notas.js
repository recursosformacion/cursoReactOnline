

import React, { Component } from 'react' //imrc

import VerVideo from 'VerVideo';
import VerFoto from 'VerFoto';

class Notas extends Component {
    components = [
        VerVideo,
        VerFoto
    ];

    Story(props) {
        // ¡Incorrecto! El tipo JSX no puede ser una expresión.  
        return
        < components[this.props.storyType] story = { props.story } />

    }
    //----------------------------------------------------

    Story1(props) {
        let Mitag = components[props.storyType]
        return
        <duv>
            <Mitag story={ props.story } />
        </duv>
    }
}