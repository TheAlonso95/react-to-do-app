import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [toDos, setToDos] = useState([]);

  return (
    <div className="App">
      <Form toDos={toDos} setToDos={setToDos} setInputText={setInputText} inputText={inputText} />
      <ToDoList inputText={inputText} toDos={toDos} />
    </div>
  );
}

export default App;
