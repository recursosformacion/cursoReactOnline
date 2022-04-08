import React from "react";

const Checkbox = (props) => {


    const {
        onChange,
        data: { id, description, done }
    } = props;



    return (

        <label>

            <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
                aria-label="..."
                name={ id }
                defaultChecked={ done }
                onChange={ onChange }
            >
            </input>

            { description }
        </label>
    )
    
};

export default Checkbox;