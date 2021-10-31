import React from 'react';

const Button = (props) => {
    
    const showValue = (value) => {
        // Function to change the way certain button's icons look
        if (value === '*') {
            return 'x'
        }
        else if (value === '/') {
            return '÷'
        }
        else return value;
    }

    return (
        <div className={props.className} onClick={props.onClick} value={props.value}>
            <p className='buttonHeading'>{showValue(props.value)}</p>
        </div>
    )
}

export default Button;