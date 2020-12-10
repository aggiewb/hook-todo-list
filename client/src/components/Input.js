import React from 'react';

const Input = (props) => {
    return <form onSubmit={props.submit}>
        <label>
            Enter an item or items separated by commas:
            <input type="text" value={props.text} onChange={props.change} required></input>
        </label>
        <input type="submit" value="Add item(s)"></input>
    </form>;
}

export default Input;