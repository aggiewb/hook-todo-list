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

  const submit = (event) => {
    event.preventDefault();
    let enteredItemsArr = text.split(',');
    for(let i = 0; i < enteredItemsArr.length; i++){
      let item = enteredItemsArr[i].trim();
      if(item === '' || list.includes(item)){
        enteredItemsArr.splice(i, i + 1);
        i--;
      } else {
        enteredItemsArr[i] = item;
      }

    }
    if(enteredItemsArr.length >= 1 && enteredItemsArr[0]){
      setList([...enteredItemsArr, ...list]);
    }
    setText('');
  }

  const removeItem = (event) => {
    const liElement = event.target.parentNode;
    const liElementId = liElement.id;
    const newList = list.splice(item => item !== liElementId);
    setList(newList);
  }

  return <div className="App">
      <h1>React Hook TODO List</h1>
      <Input change={change} submit={submit} text={text}/>
      <Display list={list} removeItem={removeItem}/>
    </div>;
}

export default App;