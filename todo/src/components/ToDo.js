import React from 'react';

export const ToDo = ({ toDo }) => {
    return (
        <div className="todo">
            <li className="todo-item">{toDo.text}</li>
            <button className="complete-btn">
                <i className="fas fa-check">Complete</i>
            </button>
            <button className="trash-btn">
                <i className="fas fa-trash">x</i>
            </button>
        </div>
    );
}

export default ToDo;