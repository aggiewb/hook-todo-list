import './App.css';
import React, { useState } from 'react';
import Input from './components/Input.js';

//React hooks reference: https://reactjs.org/docs/hooks-overview.html

function App() {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);
  const change = (event) => {
      const text = event.target.value;
      setText(text);
  }

  const submit = (event) => {
    event.preventDefault();
    const form = event.target;
    setList(list.concat(text));
    setText('');
  }

  return <div className="App">
      <Input change={change} submit={submit} text={text}/>
    </div>;
}

export default App;