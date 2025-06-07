import React from "react";
import ToDoItem from "./ToDoItem";

function TodoList({
  todos,
  onUpdate,
  onDelete,
  onEdit,
  editingTask,
  finishEditing,
}) {
  return (
    <div className="TodoList">
      {todos.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
            isEditing={editingTask && editingTask.id === todo.id}
            onEdit={onEdit}
            finishEditing={finishEditing}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;
