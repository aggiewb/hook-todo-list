import React from 'react';

const Display = (props) => {
    return <ul>
        {props.list.map(item => <li key={item}>{item}</li>)}
    </ul>;
}

export default Display;