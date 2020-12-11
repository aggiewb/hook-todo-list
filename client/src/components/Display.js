import React from 'react';
import xIcon from '../media/x-icon.png';

//Add ability to remove single items and clear list
const Display = (props) => {
    return <ul>
        {props.list.map(item => <li key={item}>{item}<img src={xIcon} alt={"A red X that can be clicked to remove this item from the list"}></img></li>)}
    </ul>;
}

export default Display;