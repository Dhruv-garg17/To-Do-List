// Filter.js
import React from 'react';

function Filter({ onFilter }) {
    return (    
        <select onChange={(e) => onFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
            <option value="Study">Study</option>
            <option value="Work">Work</option>
            <option value="Fitness">Fitness</option>
            <option value="Personal">Personal</option>
        </select>
    );
}

export default Filter;

  
  