import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';

function TodoItem({ todo, onUpdate, onDelete, isEditing, onEdit, finishEditing }) {
    const [newTitle, setNewTitle] = useState(todo.title);
 
    if (isEditing) {
        return (
            <div className="todo-item">
                <input 
                    type="text" 
                    value={newTitle} 
                    onChange={e => setNewTitle(e.target.value)} 
                />
                <div className='todo-item-btn'>
                    <button onClick={() => finishEditing({ ...todo, title: newTitle })}>Save</button>
                    <button onClick={onEdit}>Cancel</button>
                </div>
                
            </div>
        );
    }
    return (
        <div className="TodoItem">
            <div className="TodoContent">
                
                    <input
                        type="checkbox"
                        checked={todo.done}
                        onChange={() => onUpdate(todo.id, !todo.done)}
                    />
                    <span className={todo.done ? 'TodoItem-done' : ''}>
                        {todo.title} - {todo.category}
                    </span>
                
            </div>
            <div className="TodoActions">
                <i className="fa fa-pencil" onClick={() => onEdit(todo)} aria-label="Edit task"></i>
                <i className="fa fa-trash" onClick={() => onDelete(todo.id)} aria-label="Delete task"></i>
            </div>
        </div>
    );
}


export default TodoItem;



