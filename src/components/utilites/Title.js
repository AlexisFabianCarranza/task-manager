import React from 'react';

export default (props) => {
    return(
        <div>
            <h1 
                style={{
                color: '#455a64', 
                fontSize: 25,
                fontWeight: 500
            }}
            >
                {props.title}
            </h1>
        </div>
    )
}