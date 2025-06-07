import React, { useState } from 'react';

function AddTodo({ onAdd }) {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("Study");

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(title, category);
        setTitle("");
        setCategory("Study");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Task"
                    required
                />
                <select 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}>
                    <option value="Study">Study</option>
                    <option value="Work">Work</option>
                    <option value="Fitness">Fitness</option>
                    <option value="Personal">Personal</option>
                </select>
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
}

export default AddTodo;
