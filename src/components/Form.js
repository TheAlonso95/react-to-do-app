import React from 'react';

const Form = ({ setInputText, toDos, setToDos, inputText }) => {
    const inputHandler = (e) => {
        setInputText(e.target.value);
    }

    const addTodo = (e) => {
        e.preventDefault();
        setToDos([...toDos, { text: inputText, completed: false, id: toDos?.length || 0 + 1 + Math.random() }])
        setInputText("");
    }

    return(
        <form>
            <input onChange={inputHandler} value={inputText} type="text" className="todo-input" />
            <button type="submit" onClick={addTodo} className="todo-buton">
                <i className="fas fas-plus-square">+</i> 
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;