import React from 'react';

//Add ability to remove single items and clear list
const Display = (props) => {
    return <ul>
        {props.list.map(item => <li key={item}>{item}</li>)}
    </ul>;
}

export default Display;