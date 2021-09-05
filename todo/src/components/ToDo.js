import * as R from 'ramda';
import React from 'react';

export const ToDo = ({ toDo, toDos, setToDos }) => {
    const deleteToDo = () => {
        setToDos(toDos?.filter((el ) => el.id !== toDo.id))
    }

    const completeToDo = () => {
        const indexToUpdate = toDos?.findIndex(({ id }) => id === toDo.id);
        setToDos(R.update(indexToUpdate, {...toDo, completed: true})(toDos));
    }
    return (
        <div className="todo">
            <li className="todo-item">{toDo.text}</li>
            <button onClick={completeToDo} className="complete-btn">
                <i className="fas fa-check">Complete</i>
            </button>
            <button onClick={deleteToDo} className="trash-btn">
                <i className="fas fa-trash">x</i>
            </button>
        </div>
    );
}

export default ToDo;