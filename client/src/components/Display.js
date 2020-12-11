import React from 'react';
import xIcon from '../media/x-icon.png';

//Add ability to clear list
const Display = (props) => {
    return <ul>
        {props.list.map(item => {
            return <li key={item} id={item}>{item}
                <img onClick={props.removeItem} src={xIcon} alt={"A red X that can be clicked to remove this item from the list"}></img>
            </li>;
        })}
    </ul>;
}

export default Display;