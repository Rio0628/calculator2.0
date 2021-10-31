import React from 'react';

const IndHistCalc = (props) => {
    return (
        <p className='indCalculation' calculation={props.info.calc} onClick={props.onClick}>
            {`${props.info.calc} = ${props.info.answer}`}
        </p>
    )
}

export default IndHistCalc;