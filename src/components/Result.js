import React from 'react'; 

const Result = (props) => {
    return (
        <div className='resultContainer'>
            <p className='result'>{props.result}</p>
        </div>
    )
}

export default Result;