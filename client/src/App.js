import './App.css';
import React, { useState } from 'react';
import Input from './components/Input.js';
import Display from './components/Display.js';

//React hooks reference: https://reactjs.org/docs/hooks-overview.html

function App() {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);
  const change = (event) => {
      const text = event.target.value;
      setText(text);
  }

  //TODO: Prevent only a comma being entered
  const submit = (event) => {
    event.preventDefault();
    setList(list.concat(text.split(',')));
    setText('');
  }

  return <div className="App">
      <Input change={change} submit={submit} text={text}/>
      <Display list={list}/>
    </div>;
}

export default App;