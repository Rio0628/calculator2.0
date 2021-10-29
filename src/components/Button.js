import React from 'react';

const Button = (props) => {
    
    const showValue = (value) => {
        if (value === '*') {
            return 'x'
        }
        else return value;
    }

    return (
        <div className={props.className}>
            <p className='buttonHeading'>{showValue(props.value)}</p>
        </div>
    )
}

export default Button;