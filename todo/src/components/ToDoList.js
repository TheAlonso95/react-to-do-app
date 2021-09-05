import React from 'react';
import ToDo from './ToDo';
const ToDoList = ({ inputText, toDos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                { toDos.map((todo) => ( <ToDo toDo={todo} />)) }
            </ul>
        </div>
    );
}

export default ToDoList;