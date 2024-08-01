// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe() {
    const focused = () => {console.log('Good!')}
    const blurred = () => {console.log('Hey! Eyes on me!')}
    return (
        <button onFocus={focused} onBlur={blurred}>Eyes on me</button>
    )
}

export default EyesOnMe;