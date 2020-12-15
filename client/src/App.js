import './App.css';
import React, { useState } from 'react';
import Input from './components/Input.js';
import Display from './components/Display.js';

//React hooks reference: https://reactjs.org/docs/hooks-overview.html

function App() {
  const [text, setText] = useState('');

  const storedList = window.localStorage.getItem('list');
  const [list, setList] = useState(storedList ? storedList.split(',') : []);
  
  const change = (event) => {
      const text = event.target.value;
      setText(text);
  }

  const submit = (event) => {
    event.preventDefault();
    const enteredItemsArr = text.split(',').reduce((acc, item) => {
      const trimItem = item.trim();
      if(trimItem !== '' && !list.includes(trimItem) && !acc.includes(trimItem)){
        acc.push(trimItem);
      }
      return acc;
    }, []);
    const newList = [...enteredItemsArr, ...list];
    if(enteredItemsArr.length > 0){
      setList(newList);
      window.localStorage.setItem('list', newList);
    }
    setText('');
  }

  const removeItem = (event) => {
    const liElement = event.target.parentNode;
    const liElementId = liElement.id;
    const newList = list.filter(item => item !== liElementId);
    setList(newList);
    window.localStorage.setItem('list', newList);
  }

  const clearList = () => {
    setList([]);
    window.localStorage.clear();
  }

  return <div className="App">
      <h1>React Hook TODO List</h1>
      <Input change={change} submit={submit} text={text}/>
      <Display list={list} removeItem={removeItem} clearList={clearList}/>
    </div>;
}

export default App;