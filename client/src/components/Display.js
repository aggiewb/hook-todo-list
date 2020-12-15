import React from 'react';
import xIcon from '../media/x-icon.png';

const Display = (props) => {
    return <article>
        <ul>
            {props.list.map(item => {
                return <li key={item} id={item}>{item}
                    <img onClick={props.removeItem} src={xIcon} alt={"A red X that can be clicked to remove this item from the list"}></img>
                </li>;
            })}
        </ul>
        <button onClick={props.clearList}>Clear List</button>
    </article>;
}

export default Display;